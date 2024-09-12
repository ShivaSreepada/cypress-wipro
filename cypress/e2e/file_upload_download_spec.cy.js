// cypress/e2e/file_upload_download_spec.js

describe('File Uploading and Downloading', () => {
    const filePath = 'sample.txt'; // Ensure this file exists in the `cypress/fixtures` folder
    const downloadFileName = 'some-file.txt'; // File to download
    const downloadUrl = 'https://the-internet.herokuapp.com/download'; // URL for download tests
  
    it('Uploads a file and verifies success', () => {
      cy.visit('https://the-internet.herokuapp.com/upload'); // URL with file upload feature
  
      // Attach file to the input element
      cy.get('input[type="file"]').attachFile(filePath);
  
      // Click the upload button
      cy.get('#file-submit').click();
  
      // Verify the success message or uploaded file appearance
      cy.get('h3').should('contain.text', 'File Uploaded!');
    });
  
    it('Downloads a file and verifies it', () => {
      cy.visit(downloadUrl); // URL with file download options
  
      // Click the download link for the file
      cy.contains(downloadFileName).click(); // Adjust selector if needed
  
      // Verify the file download
      const filePathOnDisk = `cypress/downloads/${downloadFileName}`;
      cy.readFile(filePathOnDisk).should('exist'); // Ensure file was downloaded
  
      // Optional: Verify the file content
      cy.readFile(filePathOnDisk).should('contain', 'Expected content'); // Adjust content check as needed
    });
  });

  