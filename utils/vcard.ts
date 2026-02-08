export const generateVCard = () => {
  // Hardcoded data as per requirements
  const contact = {
    firstName: "Consultora",
    lastName: "Mary Kay",
    phone: "+5521980095740",
    note: "Consultora de Beleza Independente Mary Kay",
    url: window.location.href
  };

  const vCardData = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${contact.lastName};${contact.firstName};;;`,
    `FN:${contact.firstName} ${contact.lastName}`,
    `TEL;TYPE=CELL:${contact.phone}`,
    `NOTE:${contact.note}`,
    `URL:${contact.url}`,
    'END:VCARD'
  ].join('\n');

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.setAttribute('download', 'Consultora_MaryKay.vcf');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};