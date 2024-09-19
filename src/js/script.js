    let tabCount = 1;
    let scale = 1;
	var img = document.getElementById('image');
	var imgContainer = document.getElementById('image-container');
	var imgSpanish = document.getElementById('imageSpanish');
	var imgContainerSpanish = document.getElementById('image-container-Spanish');
	var scaleRange = document.getElementById('scaleRange');
	var scaleRangeSpanish = document.getElementById('scaleRangeSpanish');
    var eyebutton = document.getElementById('eyebutton');
    var showcard = document.getElementById('showcard');
    let offsetX = 0;
    let offsetY = 0;
    let isDragging = false;
    let dragOffsetX = 0, dragOffsetY = 0;
    let previustabFocusedId = "tab1";
    const MAX_NUMBER_TABS = 10;

	// Load the selected image into the container
    function loadImage(event, imgId, scaleId) {
      const reader = new FileReader();	 
      let img  = document.getElementById(imgId);
      let scaleRange  = document.getElementById(scaleId);
      reader.onload = function() {
        img.src = reader.result;
        img.style.width = '100%';  // reset to original scale
        img.style.height = '100%';
        img.style.top = '0';
        img.style.left = '0';
        scaleRange.value = '100'
      };
      reader.readAsDataURL(event.target.files[0]);
    }

    function addEventsImages(img, imgContainer){
        img.addEventListener('mousedown', (event) => {
            isDragging = true;
            const rect = img.getBoundingClientRect();
            dragOffsetX = event.clientX - rect.left;
            dragOffsetY = event.clientY - rect.top;
            event.preventDefault();
        });
    
        img.addEventListener('mousemove', (event) => {
        if (isDragging) {
            let img = document.getElementById(event.target.id);
            if(img != null){;
                const containerRect = imgContainer.getBoundingClientRect();
                const newLeft = event.clientX - dragOffsetX - containerRect.left;
                const newTop = event.clientY - dragOffsetY - containerRect.top;
                img.style.left = newLeft + 'px';
                img.style.top = newTop + 'px';
            }
        }
        });
    
        imgContainer.addEventListener('mouseup', () => {
            isDragging = false;
        });
    }
    addEventsImages(img, imgContainer);
    addEventsImages(imgSpanish, imgContainerSpanish);    

    // Scaling functionality with range input
    document.getElementById('scaleRange').addEventListener('input', (event) => {
      const scale = event.target.value / 100;
      let img = document.getElementById(event.target.getAttribute("data-target-id"));
      img.style.width = (scale * 100) + '%';
      img.style.height = (scale * 100) + '%';
    });

    document.getElementById('scaleRangeSpanish').addEventListener('input', (event) => {
      const scale = event.target.value / 100;
      let img = document.getElementById(event.target.getAttribute("data-target-id"));
      img.style.width = (scale * 100) + '%';
      img.style.height = (scale * 100) + '%';
    });
	function validateAddTab(){     
        if(tabCount >= MAX_NUMBER_TABS) {
            document.getElementById("add-tab").style.display = "none"
            return;
        }else{   
            document.getElementById("add-tab").style.display = "block"
        }
    }
    function addNewTab() {
        let tabCounter = (tabCount++);
        const tabId = 'tab' + tabCount;
        const tabPaneId = 'tabPane' + tabCount;

        // Create new tab
        const newTab = document.createElement('li');
        newTab.classList.add('nav-item');
        newTab.innerHTML = `
            <button class="nav-link" id="${tabId}" data-bs-toggle="tab" onclick="focusedTab('-${tabCounter}')" data-bs-target="#${tabPaneId}" type="button" role="tab" aria-controls="${tabPaneId}" aria-selected="false">
                <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, '${tabId}')" onkeydown="checkEnter(event, this)">Card ${tabCount}</span>
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
        newTabPane.innerHTML = GetTemplate(tabCounter);
        document.getElementById('tabContent').appendChild(newTabPane);	
		focusedTab('-' + tabCounter);
        document.getElementById(tabId).click();        
        validateAddTab();
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
        tabCount = (tabCount-1);
        validateAddTab();
    }

    function focusedTab(tabcount) {	
		img = document.getElementById('image' + tabcount);
		imageSpanish = document.getElementById('imageSpanish' + tabcount);
		imgContainer = document.getElementById('image-container' + tabcount);
		imgContainerSpanish = document.getElementById('image-container-Spanish' + tabcount);
        scaleRange = document.getElementById('scaleRange' + tabcount);
        scaleRangeSpanish = document.getElementById('scaleRangeSpanish' + tabcount);
        eyebutton = document.getElementById('eyebutton' + tabcount);
        showcard = document.getElementById('showcard' + tabcount);
        
        addEventsImages(img, imgContainer);
        addEventsImages(imageSpanish, imgContainerSpanish);

		// Scaling functionality with range input
		document.getElementById('scaleRange' + tabcount).addEventListener('input', (event) => {
		  const scale = event.target.value / 100;
          let img = document.getElementById(event.target.getAttribute("data-target-id"));
		  img.style.width = (scale * 100) + '%';
		  img.style.height = (scale * 100) + '%';
		});

		// Scaling functionality with range input
		document.getElementById('scaleRangeSpanish' + tabcount).addEventListener('input', (event) => {
		  const scale = event.target.value / 100;          
          let img = document.getElementById(event.target.getAttribute("data-target-id"));
		  img.style.width = (scale * 100) + '%';
		  img.style.height = (scale * 100) + '%';
		});
        previustabFocusedId = tabcount;
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

    function ShowHideCard(){
        let showcardvalue = showcard.value;

        if(showcardvalue == "true"){
            showcard.value = "false";
            eyebutton.classList.remove("bi-eye");
            eyebutton.classList.add("bi-eye-slash")
        }else{
            showcard.value = "true";
            eyebutton.classList.remove("bi-eye-slash");
            eyebutton.classList.add("bi-eye")
        }
    }

    function changeBackgroundColor(element){
        var elementCard = document.querySelectorAll('div.card');
        let backColor = element.getAttribute("backcolor");
        elementCard.forEach((element) => { 
            element.style.backgroundColor = backColor;
        });
    }

    function changeTextContent(element){

        let datatargetids = element.getAttribute("data-target-id").split(',');

        datatargetids.forEach((el) => { 
            let cardtitle = document.getElementById(el);
            cardtitle.innerText = element.value;
        });
    }

    function changeLinkUrl(element, tabcount){        
        document.getElementById('cardlink' + tabcount).setAttribute("data-target-id", element.id);
        document.getElementById('linkName' + tabcount).value = element.innerText;
        document.getElementById('linkUrl' + tabcount).value = element.getAttribute("href");
    }

    function submitLink(tabcount) {
        let readmorelinkId = document.getElementById('cardlink' + tabcount).getAttribute("data-target-id");
        let readmorelink = document.getElementById(readmorelinkId);
        readmorelink.innerText = document.getElementById('linkName' + tabcount).value;
        readmorelink.setAttribute("href", document.getElementById('linkUrl' + tabcount).value); 
        document.getElementById('hiddenButtonModal' + tabcount).click();
    }

    