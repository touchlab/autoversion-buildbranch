import * as core from '@actions/core'
import simpleGit from "simple-git";

/**
 * The main function for the action.
 * @returns {Promise<void>} Resolves when the action is complete.
 */
export async function run(): Promise<void> {
  try {
    const buildBranch: string = core.getInput('buildBranch')
    const git = simpleGit()

    await git.checkoutLocalBranch(buildBranch)
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message)
  }
}
