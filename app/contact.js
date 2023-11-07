export function Submit(args) {
  const page = args.object.page;

  let First_Name = page.getViewById('firstName').text;
  let Last_Name = page.getViewById('lastName').text;
  let Email = page.getViewById('email').text;

  if (First_Name == '' || Last_Name == '' || Email == '') {
    page.getViewById('resultLabel').text = 'Please enter all inputs';
    page.getViewById('resultLabel').style.color = 'red';
    return;
  }

  page.getViewById('resultLabel').style.color = 'green';
  page.getViewById('resultLabel').text = 'Submission Succesfull';
  page.getViewById('firstName').text ='';
  page.getViewById('lastName').text ='';
  page.getViewById('email').text ='';
}

export function goBack(args) {
  const button = args.object;
  const page = button.page;
  page.frame.goBack();
}