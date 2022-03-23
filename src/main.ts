import * as core from '@actions/core'

async function run (): Promise<void> {
  try {
    const ms: string = core.getInput('milliseconds')

    core.debug(`Got: ${ms}`)
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) {
      core.setFailed(error.message)
    }
  }
}

void run()
