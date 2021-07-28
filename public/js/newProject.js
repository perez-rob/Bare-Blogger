const handleSubmit = async (event) => {
  event.preventDefault();
  const pname = event.target.pName.value;
  const pFund = event.target.pFund.value;
  const pDesc = event.target.description.value;

  const response = await fetch('/api/projects', {
    method: 'POST',
    body: JSON.stringify({
      name: pname,
      description: pDesc,
      needed_funding: pFund,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    event.target.pName.value = '';
    event.target.pFund.value = '';
    event.target.description.value = '';
    document.location.replace('/profile');
  } else {
    alert('Error posting project');
  }
};

document
  .getElementById('project-form')
  .addEventListener('submit', handleSubmit);
