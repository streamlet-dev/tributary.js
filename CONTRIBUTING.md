# Contributing

Thank you for your interest in contributing to tributary.js!

We invite you to contribute enhancements. Upon review you will be required to complete the [Contributor License Agreement (CLA)](https://github.com/iex/cla) before we are able to merge.

If you have any questions about the contribution process, please feel free to send an email to [community@iexcloud.io](mailto:community@iexcloud.io).

## Reporting bugs, feature requests, etc.

To report bugs, request new features or similar, please open an issue on the Github
repository.

A good bug report includes:

- Expected behavior
- Actual behavior
- Steps to reproduce (preferably as minimal as possible)

## Minor changes, typos etc.

Minor changes can be contributed by navigating to the relevant files on the Github repository,
and clicking the "edit file" icon. By following the instructions on the page you should be able to
create a pull-request proposing your changes. A repository maintainer will then review your changes,
and either merge them, propose some modifications to your changes, or reject them (with a reason for
the rejection).

## Setting up a development environment

If you want to help resolve an issue by making some changes that are larger than that covered by the above paragraph, it is recommended that you:

- Fork the repository on Github
- Clone your fork to your computer
- Run the following commands inside the cloned repository:
  - `yarn` - This will install the dependencies.
- Validate the install by running the tests:
  - `yarn test` - This command will run the tests.
  - `yarn lint` - This command will run the linters.

Once you have such a development setup, you should:

- Make the changes you consider necessary
- Run the tests to ensure that your changes does not break anything
- If you add new code, preferably write one or more tests for checking that your code works as expected.
- Commit your changes and publish the branch to your github repo.
- Open a pull-request (PR) back to the main repo on Github.
