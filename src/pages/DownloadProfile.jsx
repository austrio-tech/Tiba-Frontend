const downloadProfile = () => {
  const link = document.createElement('a');
  link.href = '/TIBA FINAL PROFILE.pdf'; // must be in public folder
  link.download = 'TIBA Engineering & Contracting.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
export default downloadProfile;