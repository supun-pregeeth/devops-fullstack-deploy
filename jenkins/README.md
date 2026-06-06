Jenkins pipeline helper files

- `pipeline-library/` contains shared pipeline steps and vars (placeholders).
- `Jenkinsfile` (root) can call into `pipeline-library` or run per-repo pipelines.

Example usage:
- Add reusable steps as `vars/` or `steps/` in `pipeline-library`.
- Reference them in your `Jenkinsfile` with the Shared Library mechanism.
