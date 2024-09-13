let tabCount = 1;
    let scale = 1;
	var img = document.getElementById('image');
	var imgContainer = document.getElementById('image-container');
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let dragOffsetX = 0, dragOffsetY = 0;

	// Load the selected image into the container
    function loadImage(event) {
      const reader = new FileReader();	  
      reader.onload = function() {
        img.src = reader.result;
        img.style.width = '100%';  // reset to original scale
        img.style.height = '100%';
        img.style.top = '0';
        img.style.left = '0';
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    // Dragging functionality for image
    img.addEventListener('mousedown', (event) => {
      isDragging = true;
      const rect = img.getBoundingClientRect();
      dragOffsetX = event.clientX - rect.left;
      dragOffsetY = event.clientY - rect.top;
      event.preventDefault();
    });

    document.addEventListener('mousemove', (event) => {
      if (isDragging) {
        const containerRect = imgContainer.getBoundingClientRect();
        const newLeft = event.clientX - dragOffsetX - containerRect.left;
        const newTop = event.clientY - dragOffsetY - containerRect.top;

        img.style.left = newLeft + 'px';
        img.style.top = newTop + 'px';
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
    });

    // Scaling functionality with range input
    document.getElementById('scaleRange').addEventListener('input', (event) => {
      const scale = event.target.value / 100;
      img.style.width = (scale * 100) + '%';
      img.style.height = (scale * 100) + '%';
    });
	
    function addNewTab() {
        let tabCounter = (tabCount++);
        const tabId = 'tab' + tabCount;
        const tabPaneId = 'tabPane' + tabCount;

        // Create new tab
        const newTab = document.createElement('li');
        newTab.classList.add('nav-item');
        newTab.innerHTML = `
            <button class="nav-link" id="${tabId}" data-bs-toggle="tab" onclick="focusedTab('-${tabCounter}')" data-bs-target="#${tabPaneId}" type="button" role="tab" aria-controls="${tabPaneId}" aria-selected="false">
                <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, '${tabId}')" onkeydown="checkEnter(event, this)">Tab ${tabCount}</span>
                <span class="close-tab" onclick="removeTab(event, '${tabId}')">&times;</span>
            </button>
        `;
        const addTabBtn = document.getElementById('add-tab').parentNode;
        addTabBtn.before(newTab);

        // Create new tab content
        const newTabPane = document.createElement('div');
        newTabPane.classList.add('tab-pane', 'fade');
        newTabPane.id = tabPaneId;
        newTabPane.setAttribute('role', 'tabpanel');
        newTabPane.setAttribute('aria-labelledby', tabId);
        newTabPane.innerHTML = `
            <div class="row mt-4">  
				<input type="file" id="file-input-${tabCounter}" accept="image/*" onchange="loadImage(event)"  class="file-input">
                <div class="col-md-6">
                    <div class="image-wrapper">
					  <input type="range" class="form-control-range mt-3" id="scaleRange-${tabCounter}" min="10" max="200" value="100">					
					  <div id="image-container-${tabCounter}" class="image-container" ondblclick="document.getElementById('file-input-${tabCounter}').click();">
						<img id="image-${tabCounter}" class="image" draggable="false">
					  </div>
					</div>
                </div>
                <div class="col-md-6">
                    <form>
					  <div class="form-group">
						<label for="title-${tabCounter}">Title</label>
						<input type="text" class="form-control" id="title-${tabCounter}" placeholder="Enter title">
					  </div>
					  <div class="form-group">
						<label for="description-${tabCounter}">Description</label>
						<input type="text" class="form-control" id="description-${tabCounter}" placeholder="Enter description">
					  </div>
					  <div class="form-group">
						<label for="legend-${tabCounter}">Legend</label>
						<input type="text" class="form-control" id="legend-${tabCounter}" placeholder="Enter legend">
					  </div>
					  <div class="form-group">
						<label for="backgroundColor-${tabCounter}">Select Background Color</label>
						<input type="color" class="color-picker form-control" id="backgroundColor-${tabCounter}">
					  </div>
					  <div class="form-group">
						<label for="linkUrl-${tabCounter}">Link URL</label>
						<input type="url" class="form-control" id="linkUrl-${tabCounter}" placeholder="Enter URL">
					  </div>
					  <div class="form-group">
						<label for="linkName-${tabCounter}">Link Name</label>
						<input type="text" class="form-control" id="linkName-${tabCounter}" placeholder="Enter link name">
					  </div>
					</form>
                </div>
            </div>
        `;
        document.getElementById('tabContent').appendChild(newTabPane);	
		focusedTab('-' + tabCounter);
    }

    function removeTab(event, tabId) {
        event.stopPropagation();
        const tab = document.getElementById(tabId);
        const tabPaneId = tab.getAttribute('data-bs-target').replace('#', '');
        const tabPane = document.getElementById(tabPaneId);
        tab.remove();
        tabPane.remove();
        if (tabId === 'tab1' && tabCount === 1) {
            return; // Keep the first tab if it's the only one
        }
        if (tab.classList.contains('active')) {
            const firstTab = document.querySelector('.nav-link:not(#add-tab)');
            const firstTabPane = document.querySelector('.tab-pane');
            firstTab.classList.add('active');
            firstTabPane.classList.add('show', 'active');
        }
    }

    function focusedTab(tabcount) {	
		img = document.getElementById('image' + tabcount);
		imgContainer = document.getElementById('image-container' + tabcount);
		
		img.addEventListener('mousedown', (event) => {
		  isDragging = true;
		  const rect = img.getBoundingClientRect();
		  dragOffsetX = event.clientX - rect.left;
		  dragOffsetY = event.clientY - rect.top;
		  event.preventDefault();
		});

		document.addEventListener('mousemove', (event) => {
		  if (isDragging) {
			const containerRect = imgContainer.getBoundingClientRect();
			const newLeft = event.clientX - dragOffsetX - containerRect.left;
			const newTop = event.clientY - dragOffsetY - containerRect.top;

			img.style.left = newLeft + 'px';
			img.style.top = newTop + 'px';
		  }
		});

		document.addEventListener('mouseup', () => {
		  isDragging = false;
		});

		// Scaling functionality with range input
		document.getElementById('scaleRange' + tabcount).addEventListener('input', (event) => {
		  const scale = event.target.value / 100;
		  img.style.width = (scale * 100) + '%';
		  img.style.height = (scale * 100) + '%';
		});
    }	

    // Make the tab title editable on double click
    function makeTitleEditable(element) {
        element.contentEditable = true;
        element.focus();
    }

    // Save tab title when input loses focus or on 'Enter' key
    function updateTabTitle(element, tabId) {
        element.contentEditable = false;
        document.getElementById(tabId).querySelector('span').innerText = element.innerText;
    }

    // Detect Enter key to save the tab title
    function checkEnter(event, element) {
        if (event.key === 'Enter') {
            event.preventDefault();
            element.blur();  // Blur input to trigger saving title
        }
    }