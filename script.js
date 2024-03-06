const search = document.getElementById('search')
const emojiContainer = document.getElementById('emojii_container')


function displayEmoji(query){
    emojiContainer.innerHTML = ''; // Clear previous results
    let filterData = emojiList.filter(e =>{
        if(e.description.indexOf(query) != -1)
        return true
    })
    filterData.forEach(e =>{

        let newRow = document.createElement('tr')
        let newEmoji = document.createElement('td')
        let newDisc = document.createElement('td')

        newEmoji.classList.add('emoji');
        newDisc.classList.add('description');

        newEmoji.innerText = e.emoji
        newDisc.innerText = e.description

        newRow.appendChild(newEmoji)
        newRow.appendChild(newDisc)

        emojiContainer.append(newRow)
        
    });

    const emojis = document.querySelectorAll('.emoji');
    // const table = document.getElementsByName('table')

    emojis.forEach(emoji => {
        emoji.style.fontSize = '2rem';
        emoji.style.padding = '1rem 0';
        // table.style.marginLeft = '0'
    });
    
    // const table = emojiContainer.parentElement; // Assuming the table is the parent of the emoji container
    // table.style.marginLeft = '0';
}

function findEmoji(e){
    let value = e.target.value
    displayEmoji(value)
}

// window.addEventListener('load',displayEmoji)
window.addEventListener('load', () => displayEmoji('')); 
search.addEventListener('keyup', findEmoji)