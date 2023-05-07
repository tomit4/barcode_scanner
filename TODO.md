### TODO

__PASS Assignment Next Steps__

This file is a quick checklist of what is needed next to get barcode writing into the PASS project.

- [ ] Inspect the documentation for [@inrupt/solid-client](https://docs.inrupt.com/developer-tools/javascript/client-libraries/reference/solid-client/)
- [ ] As well as the documentation specifically about [READ/WRITE API logic](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/read-write-data/)
- [ ] Probably not necessary as inrupt actually writes the .ttl file format for us, but still good to know is the official [ttl documentation](https://www.w3.org/TeamSubmission/turtle/#sec-grammar)
- [ ] Specifically look at the current PASS's implementation of src/utils/session-core.js. Line 105 specifically as the uploadDocument() function which is a good place to start when looking at the basics of how to use @inrupt/solid-client to upload ttl files to the solid server. Note that many of the methods called within this function are native to the @inrupt/solid-client API.
- [ ] The file /src/components/Form/UploadDocumentForm.jsx provides us with a good template to finalize the assignment by mimicing its logic. Specifically the logic on line 64 inside of the handleFormSubmission() function. We can likely create a more simplified version of this component and place it somewhere(?) within the PASS GUI.
- [ ] Ensure that if you start to make changes to the code base to NOT work on the Master or dev branch, but rather to start your own branch so that a Pull Request can be made. Should you start work on the PASS code base and push changes to your own branch, please let me know the name of the branch so that I can pull, review, and possibly contribute to it as well.

:smile: Cheers!
