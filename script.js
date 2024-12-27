document.getElementById('flexCounterBtn').addEventListener('click', function() {
    const count = parseInt(document.getElementById('flexCounter').value);
    const container = document.getElementById('flexboxContainer');

    // Clear existing boxes
    container.innerHTML = '';

    // Create flexboxes
    for (let i = 0; i < count; i++) {
        const box = document.createElement('div');
        box.className = 'flexChild';
        box.textContent = `Flex ${i + 1}`;
        container.appendChild(box);
    }
});

function toggleCheckbox(checkbox) {
    // Find the closest container (parent) of the checkbox
    const container = checkbox.closest('.attributeFunction');
    const checkboxes = container.querySelectorAll('input[type="checkbox"]');
    
    checkboxes.forEach((cb) => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });
}

function updateFlexDirection(checkbox) {
    const container = document.getElementById('flexboxContainer');
    
    // Uncheck other checkboxes in the flexDirection group
    const checkboxes = document.querySelectorAll('.fDirection');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });

    // Determine which direction to set based on the checked checkbox
    if (checkbox.checked) {
        if (checkbox.id === 'fDirection-1') {
            container.style.flexDirection = 'row';
        } else if (checkbox.id === 'fDirection-2') {
            container.style.flexDirection = 'row-reverse';
        } else if (checkbox.id === 'fDirection-3') {
            container.style.flexDirection = 'column';
        } else if (checkbox.id === 'fDirection-4') {
            container.style.flexDirection = 'column-reverse';
        }
    }
}

function updateFlexWrap(checkbox) {
    const container = document.getElementById('flexboxContainer');
    
    // Uncheck other checkboxes in the flexDirection group
    const checkboxes = document.querySelectorAll('.fWrap');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });

    // Determine which direction to set based on the checked checkbox
    if (checkbox.checked) {
        if (checkbox.id === 'fWrap-1') {
            container.style.flexWrap = 'nowrap';
        } else if (checkbox.id === 'fWrap-2') {
            container.style.flexWrap = 'wrap';
        } else if (checkbox.id === 'fWrap-3'){
            container.style.flexWrap = 'wrap-reverse';
        }
    }
}


function updateAlignItems(checkbox) {
    const container = document.getElementById('flexboxContainer');
    
    // Uncheck other checkboxes in the flexDirection group
    const checkboxes = document.querySelectorAll('.aItems');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });

    // Determine which direction to set based on the checked checkbox
    if (checkbox.checked) {
        if (checkbox.id === 'aItems-1') {
            container.style.alignItems = 'stretch';
        } else if (checkbox.id === 'aItems-2') {
            container.style.alignItems = 'baseline';
        } else if (checkbox.id === 'aItems-3') {
            container.style.alignItems = 'center';
        } else if (checkbox.id === 'aItems-4') {
            container.style.alignItems = 'flex-start';
        }
    }
}



function updateJustifyContent(checkbox) {
    const container = document.getElementById('flexboxContainer');
    
    // Uncheck other checkboxes in the flexDirection group
    const checkboxes = document.querySelectorAll('.jContent');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });

    // Determine which direction to set based on the checked checkbox
    if (checkbox.checked) {
        if (checkbox.id === 'jContent-1') {
            container.style.justifyContent = 'flex-start';
        } else if (checkbox.id === 'jContent-2') {
            container.style.justifyContent = 'flex-end';
        } else if (checkbox.id === 'jContent-3') {
            container.style.justifyContent = 'space-around';
        } else if (checkbox.id === 'jContent-4') {
            container.style.justifyContent = 'space-evenly';
        } else if (checkbox.id === 'jContent-5') {
        container.style.justifyContent = 'space-between';
        }
    }
}


function updateAlignContent(checkbox) {
    const container = document.getElementById('flexboxContainer');
    
    // Uncheck other checkboxes in the flexDirection group
    const checkboxes = document.querySelectorAll('.aContent');
    checkboxes.forEach(cb => {
        if (cb !== checkbox) {
            cb.checked = false;
        }
    });

    // Determine which direction to set based on the checked checkbox
    if (checkbox.checked) {
        if (checkbox.id === 'aContent-1') {
            container.style.alignContent = 'stretch';
        } else if (checkbox.id === 'aContent-2') {
            container.style.alignContent = 'center';
        } else if (checkbox.id === 'aContent-3') {
            container.style.alignContent = 'flex-start';
        } else if (checkbox.id === 'aContent-4') {
            container.style.alignContent = 'flex-end';
        } else if (checkbox.id === 'aContent-5') {
            container.style.alignContent = 'space-around';
        } else if (checkbox.id === 'aContent-6') {
            container.style.alignContent = 'space-evenly';
        } else if (checkbox.id === 'aContent-7') {
            container.style.alignContent = 'space-between';
        }
    }
}

