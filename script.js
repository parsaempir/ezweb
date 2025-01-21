const dropdown = document.querySelector('.dropdown');
    const dropdownItems = document.querySelector('.dropdown-items');

    dropdown.addEventListener('mouseover', () => {
      dropdownItems.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
      dropdownItems.style.display = 'none';
    });
    const dropdownOne = document.querySelector('.dropdown-one');
    const dropdownItemsOne = document.querySelector('.dropdown-items-one');

    dropdownOne.addEventListener('mouseover', () => {
      dropdownItemsOne.style.display = 'block';
    });

    dropdownOne.addEventListener('mouseout', () => {
      dropdownItemsOne.style.display = 'none';
    });
    const dropdownTwo = document.querySelector('.dropdown-two');
const dropdownItemsTwo = document.querySelector('.dropdown-items-two');

dropdownTwo.addEventListener('mouseover', () => {
  dropdownItemsTwo.style.display = 'block';
});

dropdownTwo.addEventListener('mouseout', () => {
  dropdownItemsTwo.style.display = 'none';
});
const dropdownThree = document.querySelector('.dropdown-three');
const dropdownItemsThree = document.querySelector('.dropdown-items-three');

dropdownThree.addEventListener('mouseover', () => {
  dropdownItemsThree.style.display = 'block';
});

dropdownThree.addEventListener('mouseout', () => {
  dropdownItemsThree.style.display = 'none';
});
