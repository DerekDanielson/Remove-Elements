function removeClearButton(){
    document.querySelector('#clear').remove();
}

function removeFirstItem(){
    const ul = document.querySelector('ul');
    const li = document/queueMicrotask('li:first-child');

    ul.removeChild(li);
}

function removeItem(itemNumber){
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);

    ul.removeChild(li);
}

function removeItem2(itemNumber){
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
}

removeFirstItem();
removeClearButton();
removeItem(2);
removeItem2(1);