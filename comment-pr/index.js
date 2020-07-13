const core = require('@actions/core');
const github = require('@actions/github');

async function main() {
    const issue = {
        owner: github.context.repo.owner,
        repo: github.context.repo.repo,
        issue_number: github.context.issue.number,
    };

    const dedupe_token = core.getInput("dedupe_token");
    const body = core.getInput("body", { required: true });

    if (dedupe_token && !body.includes(dedupe_token)) {
        core.setFailed("If you specify 'dedupe_token' it must be included in body");
        return
    }

    const octokit = github.getOctokit(core.getInput('github-token', { required: true }));

    const { data: comments } = await octokit.issues.listComments(issue);
    const comment = comments.find((c) => c.user.login == "github-actions[bot]" && c.body.includes(dedupe_token));
    if (comment) { await octokit.issues.deleteComment({ ...issue, comment_id: comment.id }) };

    await octokit.issues.createComment({ ...issue, body: body });
}

(async () => {
    try {
        await main();
    } catch (error) {
        core.setFailed(error.message);
    }
})();
