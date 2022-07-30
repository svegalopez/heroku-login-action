const core = require('@actions/core');

const createCatFile = ({ email, key }) => `cat >~/.netrc <<EOF
machine api.heroku.com
    login ${email}
    password ${key}
machine git.heroku.com
    login ${email}
    password ${key}
EOF`;

const main = async () => {
  try {
    /**
     * We need to fetch all the inputs that were provided to our action
     * and store them in variables for us to use.
     **/
    const key = core.getInput('heroku_api_key', { required: true });
    const email = core.getInput('email', { required: true });

    execSync(createCatFile({
        key,
        email
    }));

  } catch (error) {
    core.setFailed(error.message);
  }
}

// Call the main function to run the action
main();