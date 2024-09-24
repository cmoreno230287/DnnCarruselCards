const teplateContentTab = `<div class="row mt-4">                
    <input type="hidden" id="showcard{tabCounter}" value="true"/>
    <input type="hidden" id="showcardLanguage{tabCounter}" value="true"/>
    <div class="form-group row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-10 pipe">  
            <label for="backgroundColor{tabCounter}">Background Color</label>
            <label class="color-picker form-control backgroundColor1" backcolor="#ffffff" id="backgroundColor1{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            <label class="color-picker form-control backgroundColor2" backcolor="#f0f0f0" id="backgroundColor2{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            <label class="color-picker form-control backgroundColor3" backcolor="#6287BA" id="backgroundColor3{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            <label class="color-picker form-control backgroundColor4" backcolor="#707B89" id="backgroundColor4{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            <label class="color-picker form-control backgroundColor5" backcolor="#d9d5d1" id="backgroundColor5{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            <label class="color-picker form-control backgroundColor6" backcolor="#ebe8e5" id="backgroundColor6{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            <span class="separatorNavItem">|</span>
            <label for="chkShowEnglishLanguage{tabCounter}">English</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliEnglish{tabCounter}" name="English" id="chkShowEnglishLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>	
            <label for="chkShowSpanishLanguage{tabCounter}">Spanish</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliSpanish{tabCounter}" name="Spanish" id="chkShowSpanishLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>	
            <label for="chkShowFrenchLanguage{tabCounter}">French</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliFrench{tabCounter}" name="French" id="chkShowFrenchLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>		
            <label for="chkShowPortuguesLanguage{tabCounter}">Portugues</label>
            <input type="checkbox" class="chkShowLanguage" data-target-id="tabliPortugues{tabCounter}" name="Portugues" id="chkShowPortuguesLanguage{tabCounter}" onchange="ShowCardLangage(this)"></input>					
            <span class="separatorNavItem">|</span><a href="#" id="eyebutton{tabCounter}" class="bi bi-eye eyeNavMenuItem" onclick="ShowHideCard()"></a>
            <span class="separatorNavItem">|</span><a href="#" class="bi bi-floppy eyeNavMenuItem"></a>
        </div>
    </div>
    <input type="file" id="file-input{tabCounter}" accept="image/*" onchange="loadImage(event, 'image{tabCounter}', 'scaleRange{tabCounter}')" class="file-input">
    <input type="file" id="file-input-Spanish{tabCounter}" accept="image/*" onchange="loadImage(event, 'imageSpanish{tabCounter}', 'scaleRangeSpanish{tabCounter}')" class="file-input">
    <input type="file" id="file-input-French{tabCounter}" accept="image/*" onchange="loadImage(event, 'imageFrench{tabCounter}', 'scaleRangeFrench{tabCounter}')" class="file-input">
    <input type="file" id="file-input-Portugues{tabCounter}" accept="image/*" onchange="loadImage(event, 'imagePortugues{tabCounter}', 'scaleRangePortugues{tabCounter}')" class="file-input">
    <!-- Left Side: Form Controls -->
    <div class="col-md-10">     
        <ul class="nav nav-tabs" id="tabListLanguagesImages" role="tablist">
            <li class="nav-item" role="presentation" id="tabliEnglish{tabCounter}">
                <button class="nav-link active" id="tabEnglish{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneEnglish{tabCounter}" type="button"
                        role="tab" aria-controls="tabPaneEnglish{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabEnglish{tabCounter}')" onkeydown="checkEnter(event, this)">English</span>
                </button>
            </li>
            <li class="nav-item" role="presentation" id="tabliSpanish{tabCounter}">
                <button class="nav-link" id="tabSpanish{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneSpanish{tabCounter}" type="button"
                        role="tab" aria-controls="tabPaneSpanish{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabSpanish{tabCounter}')" onkeydown="checkEnter(event, this)">Spanish</span>
                </button>
            </li> 
            <li class="nav-item" role="presentation" id="tabliFrench{tabCounter}">
                <button class="nav-link" id="tabFrench{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneFrench{tabCounter}" type="button"
                        role="tab" aria-controls="tabPaneFrench{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabFrench{tabCounter}')" onkeydown="checkEnter(event, this)">French</span>
                </button>
            </li> 
            <li class="nav-item" role="presentation" id="tabliPortugues{tabCounter}">
                <button class="nav-link" id="tabPortugues{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPanePortugues{tabCounter}" type="button"
                        role="tab" aria-controls="tabPanePortugues{tabCounter}" aria-selected="true">                
                    <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabPortugues{tabCounter}')" onkeydown="checkEnter(event, this)">Portugues</span>
                </button>
            </li> 
        </ul> 
        <div class="tab-content" id="tabContentLanguagesImagesEnglish">
            <!-- Tab 1 Content -->
            <div class="tab-pane fade show active" id="tabPaneEnglish{tabCounter}" role="tabpanel" aria-labelledby="tabEnglish{tabCounter}">
                <div class="form-group row">
                    <label for="scaleRange{tabCounter}" class="col-sm-2 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRange{tabCounter}" data-target-id="image{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" style="width: 300px;">
                        <div class="image-wrapper">						  
                            <div id="image-container{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input{tabCounter}').click();">
                                <img id="image{tabCounter}" class="image" draggable="false">
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitle{tabCounter}">Card title</h5>
                            <p class="card-text" id="cardText{tabCounter}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="readmorelink" id="readmorelink{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form>
                          <div class="form-group">
                            <label for="title{tabCounter}">Title</label>
                            <input type="text" class="form-control" id="title{tabCounter}" data-target-id="cardtitle{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                          </div>
                          <div class="form-group">
                            <label for="description{tabCounter}">Description</label>
                            <textarea class="form-control" id="description{tabCounter}" data-target-id="cardText{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                          </div>
                          <div class="form-group" control-role="legend">
                            <label for="legend{tabCounter}">Legend</label>
                            <input type="text" class="form-control" id="legend{tabCounter}" placeholder="Enter legend">
                          </div>
                          <div class="form-group">
                            <label for="linkUrl{tabCounter}">Link URL</label>
                            <input type="url" class="form-control" data-target-id="readmorelink{tabCounter}" id="linkUrl{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                          </div>
                          <div class="form-group">
                            <label for="linkName{tabCounter}">Link Name</label>
                            <input type="text" class="form-control" data-target-id="readmorelink{tabCounter}" id="linkName{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                          </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="tab-pane fade" id="tabPaneSpanish{tabCounter}" role="tabpanel" aria-labelledby="tabSpanish{tabCounter}">
                <div class="form-group row">
                    <label for="scaleRangeSpanish{tabCounter}" class="col-sm-2 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRangeSpanish{tabCounter}" data-target-id="imageSpanish{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" style="width: 300px;">
                        <div class="image-wrapper">						  
                            <div id="image-container-Spanish{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Spanish{tabCounter}').click();">
                                <img id="imageSpanish{tabCounter}" class="image" draggable="false">
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitleSpanish{tabCounter}">Card title</h5>
                            <p class="card-text" id="cardTextSpanish{tabCounter}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="readmorelink" id="readmorelinkSpanish{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form>
                            <div class="form-group">
                                <label for="titleSpanish{tabCounter}">Title</label>
                                <input type="text" class="form-control" id="titleSpanish{tabCounter}" data-target-id="cardtitleSpanish{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                            </div>
                            <div class="form-group">
                                <label for="descriptionSpanish{tabCounter}">Description</label>
                                <textarea class="form-control" id="descriptionSpanish{tabCounter}" data-target-id="cardTextSpanish{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                            </div>
                            <div class="form-group" control-role="legend">
                                <label for="legendSpanish{tabCounter}">Legend</label>
                                <input type="text" class="form-control" id="legendSpanish{tabCounter}" placeholder="Enter legend">
                            </div>
                            <div class="form-group">
                                <label for="linkUrlSpanish{tabCounter}">Link URL</label>
                                <input type="url" class="form-control" data-target-id="readmorelinkSpanish{tabCounter}" id="linkUrlSpanish{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                            </div>
                            <div class="form-group">
                                <label for="linkNameSpanish{tabCounter}">Link Name</label>
                                <input type="text" class="form-control" data-target-id="readmorelinkSpanish{tabCounter}" id="linkNameSpanish{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                            </div>
                        </form>
                    </div>
                </div>
            </div> 
            <div class="tab-pane fade" id="tabPaneFrench{tabCounter}" role="tabpanel" aria-labelledby="tabFrench{tabCounter}">
                <div class="form-group row">
                    <label for="scaleRangeFrench{tabCounter}" class="col-sm-2 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRangeFrench{tabCounter}" data-target-id="imageFrench{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" style="width: 300px;">
                        <div class="image-wrapper">						  
                            <div id="image-container-French{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-French{tabCounter}').click();">
                                <img id="imageFrench{tabCounter}" class="image" draggable="false">
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitleFrench{tabCounter}">Card title</h5>
                            <p class="card-text" id="cardTextFrench{tabCounter}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="readmorelink" id="readmorelinkFrench{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form>
                            <div class="form-group">
                                <label for="titleFrench{tabCounter}">Title</label>
                                <input type="text" class="form-control" id="titleFrench{tabCounter}" data-target-id="cardtitleFrench{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                            </div>
                            <div class="form-group">
                                <label for="descriptionFrench{tabCounter}">Description</label>
                                <textarea class="form-control" id="descriptionFrench{tabCounter}" data-target-id="cardTextFrench{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                            </div>
                            <div class="form-group" control-role="legend">
                                <label for="legendFrench{tabCounter}">Legend</label>
                                <input type="text" class="form-control" id="legendFrench{tabCounter}" placeholder="Enter legend">
                            </div>
                            <div class="form-group">
                                <label for="linkUrlFrench{tabCounter}">Link URL</label>
                                <input type="url" class="form-control" data-target-id="readmorelinkFrench{tabCounter}" id="linkUrlFrench{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                            </div>
                            <div class="form-group">
                                <label for="linkNameFrench{tabCounter}">Link Name</label>
                                <input type="text" class="form-control" data-target-id="readmorelinkFrench{tabCounter}" id="linkNameFrench{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                            </div>
                        </form>
                    </div>
                </div>
            </div>   
            <div class="tab-pane fade" id="tabPanePortugues{tabCounter}" role="tabpanel" aria-labelledby="tabPortugues{tabCounter}">
                <div class="form-group row">
                    <label for="scaleRangePortugues{tabCounter}" class="col-sm-2 col-form-label">Size</label>
                    <div class="col-sm-2">
                        <input type="range" class="form-control-range mt-3" id="scaleRangePortugues{tabCounter}" data-target-id="imagePortugues{tabCounter}" min="10" max="200" value="100">
                    </div>
                </div>
                <div class="row mt-4">
                    <div class="card col-md-4" style="width: 300px;">
                        <div class="image-wrapper">						  
                            <div id="image-container-Portugues{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Portugues{tabCounter}').click();">
                                <img id="imagePortugues{tabCounter}" class="image" draggable="false">
                            </div>
                        </div>						
                        <div class="card-body">
                            <h5 class="card-title" id="cardtitlePortugues{tabCounter}">Card title</h5>
                            <p class="card-text" id="cardTextPortugues{tabCounter}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="readmorelink" id="readmorelinkPortugues{tabCounter}">read more</a>
                        </div>
                    </div>
                    <div class="col-md-6 RightColumnForm">
                        <form>
                            <div class="form-group">
                                <label for="titlePortugues{tabCounter}">Title</label>
                                <input type="text" class="form-control" id="titlePortugues{tabCounter}" data-target-id="cardtitlePortugues{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
                            </div>
                            <div class="form-group">
                                <label for="descriptionPortugues{tabCounter}">Description</label>
                                <textarea class="form-control" id="descriptionPortugues{tabCounter}" data-target-id="cardTextPortugues{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
                            </div>
                            <div class="form-group" control-role="legend">
                                <label for="legendPortugues{tabCounter}">Legend</label>
                                <input type="text" class="form-control" id="legendPortugues{tabCounter}" placeholder="Enter legend">
                            </div>
                            <div class="form-group">
                                <label for="linkUrlPortugues{tabCounter}">Link URL</label>
                                <input type="url" class="form-control" data-target-id="readmorelinkPortugues{tabCounter}" id="linkUrlPortugues{tabCounter}" placeholder="Enter URL" onchange="setLinkUrl(this, '')">
                            </div>
                            <div class="form-group">
                                <label for="linkNamePortugues{tabCounter}">Link Name</label>
                                <input type="text" class="form-control" data-target-id="readmorelinkPortugues{tabCounter}" id="linkNamePortugues{tabCounter}" placeholder="Enter link name" onchange="setLinkText(this, '')">
                            </div>
                        </form>
                    </div>
                </div>
            </div>     
        </div>   
    </div>
</div>
`;

const teplateContentTabV1 = `
                <div class="row mt-4">                
                <input type="hidden" id="showcard{tabCounter}" value="true"/>
    <div class="form-group row">
        <div class="col-sm-1">
        </div>
        <div class="col-sm-2">						
        </div>
        <div class="col-sm-4">						
        </div>
        <div class="col-sm-4 pipe">
            <a href="#" id="eyebutton{tabCounter}" class="bi bi-eye icontool" onclick="ShowHideCard()"></a>
            <a href="#" class="bi bi-floppy icontool"></a>
        </div>
    </div>
    <input type="file" id="file-input{tabCounter}" accept="image/*" onchange="loadImage(event, 'image{tabCounter}', 'scaleRange{tabCounter}')" class="file-input">
    <input type="file" id="file-input-Spanish{tabCounter}" accept="image/*" onchange="loadImage(event, 'imageSpanish{tabCounter}', 'scaleRangeSpanish{tabCounter}')" class="file-input">
    <input type="file" id="file-input-French{tabCounter}" accept="image/*" onchange="loadImage(event, '', '')" class="file-input">
    <input type="file" id="file-input-Portugues{tabCounter}" accept="image/*" onchange="loadImage(event, '', '')" class="file-input">
    <div class="col-md-4">    
                    <ul class="nav nav-tabs" id="tabListLanguagesImages" role="tablist">
                        <li class="nav-item" role="presentation">
                            <button class="nav-link active" id="tabEnglish{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneEnglish{tabCounter}" type="button"
                                    role="tab" aria-controls="tabPaneEnglish{tabCounter}" aria-selected="true">                
                                <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabEnglish{tabCounter}')" onkeydown="checkEnter(event, this)">English</span>
                            </button>
                        </li>
                        <li class="nav-item" role="presentation">
                            <button class="nav-link" id="tabSpanish{tabCounter}" data-bs-toggle="tab" data-bs-target="#tabPaneSpanish{tabCounter}" type="button"
                                    role="tab" aria-controls="tabPaneSpanish{tabCounter}" aria-selected="true">                
                                <span class="editable-title" ondblclick="makeTitleEditable(this)" onblur="updateTabTitle(this, 'tabEnglish{tabCounter}')" onkeydown="checkEnter(event, this)">Spanish</span>
                            </button>
                        </li>  
                    </ul> 
                    <div class="tab-content" id="tabContentLanguagesImagesEnglish">
                        <!-- Tab 1 Content -->
                        <div class="tab-pane fade show active" id="tabPaneEnglish{tabCounter}" role="tabpanel" aria-labelledby="tabEnglish{tabCounter}">
                            <div class="form-group row">
                                <label for="scaleRange{tabCounter}" class="col-sm-2 col-form-label">Size</label>
                                <div class="col-sm-2">
                                    <input type="range" class="form-control-range mt-3" id="scaleRange{tabCounter}" data-target-id="image{tabCounter}" min="10" max="200" value="100">
                                </div>
                            </div>
                            <div class="card" style="width: 300px;">
                                <div class="image-wrapper">						  
                                  <div id="image-container{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input{tabCounter}').click();">
                                    <img id="image{tabCounter}" class="image" draggable="false">
                                  </div>
                                </div>						
                                <div class="card-body">
                                    <h5 class="card-title" id="cardtitle{tabCounter}">Card title</h5>
                                    <p class="card-text" id="cardText{tabCounter}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="readmorelink" id="readmorelink{tabCounter}" data-toggle="modal" data-target="#linkModal{tabCounter}" onclick="changeLinkUrl(this, {tabCounter})">read more</a>
                                </div>
                            </div>
                        </div>
                        <div class="tab-pane fade" id="tabPaneSpanish{tabCounter}" role="tabpanel" aria-labelledby="tabSpanish{tabCounter}">
                            <div class="form-group row">
                                <label for="scaleRangeSpanish{tabCounter}" class="col-sm-2 col-form-label">Size</label>
                                <div class="col-sm-2">
                                    <input type="range" class="form-control-range mt-3" id="scaleRangeSpanish{tabCounter}" data-target-id="imageSpanish{tabCounter}" min="10" max="200" value="100">
                                </div>
                            </div>
                            <div class="card" style="width: 300px;">
                                <div class="image-wrapper">						  
                                  <div id="image-container-Spanish{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input-Spanish{tabCounter}').click();">
                                    <img id="imageSpanish{tabCounter}" class="image" draggable="false">
                                  </div>
                                </div>						
                                <div class="card-body">
                                    <h5 class="card-title" id="cardtitleSpanish{tabCounter}">Card title</h5>
                                    <p class="card-text" id="cardTextSpanish{tabCounter}">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" class="readmorelink" id="readmorelinkSpanish{tabCounter}" data-toggle="modal" data-target="#linkModal{tabCounter}" onclick="changeLinkUrl(this, {tabCounter})">read more</a>
                                </div>
                            </div>
                        </div>   
                        <div class="modal fade" id="linkModal{tabCounter}" tabindex="-1" role="dialog" aria-labelledby="linkModalLabel" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="linkModalLabel{tabCounter}">Add a Link</h5>
                                        <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="hiddenButtonModal{tabCounter}">
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div class="modal-body">
                                        <form id="linkForm{tabCounter}">
                                            <input type="hidden" id="cardlink{tabCounter}" data-target-id="">
                                            <div class="form-group">
                                                <label for="linkName">Link Name</label>
                                                <input type="text" class="form-control" id="linkName{tabCounter}" data-target-id="" required>
                                            </div>
                                            <div class="form-group">
                                                <label for="linkUrl">Link URL</label>
                                                <input type="url" class="form-control" id="linkUrl{tabCounter}" data-target-id="" required>
                                            </div>
                                        </form>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" onclick="submitLink({tabCounter})">Save</button>
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>  
    </div>
    <div class="col-md-6">
        <form>
            <div class="form-group">
            <label for="title{tabCounter}">Title</label>
            <input type="text" class="form-control" id="title{tabCounter}" data-target-id="cardtitle{tabCounter},cardtitleSpanish{tabCounter}" onchange="changeTextContent(this)" placeholder="Enter title">
            </div>
            <div class="form-group">
            <label for="description{tabCounter}">Description</label>
            <textarea class="form-control" id="description{tabCounter}" data-target-id="cardText{tabCounter},cardTextSpanish{tabCounter}" placeholder="Enter description" rows="3" onchange="changeTextContent(this)"></textarea>
            </div>
            <div class="form-group">
            <label for="legend{tabCounter}">Legend</label>
            <input type="text" class="form-control" id="legend{tabCounter}" placeholder="Enter legend">
            </div>
            <div class="form-group">
                <label for="backgroundColor">Background Color</label>
                <label class="color-picker form-control backgroundColor1" backcolor="#ffffff" id="backgroundColor1{tabCounter}" onclick="changeBackgroundColor(this)"></label>
                <label class="color-picker form-control backgroundColor2" backcolor="#f0f0f0" id="backgroundColor2{tabCounter}" onclick="changeBackgroundColor(this)"></label>
                <label class="color-picker form-control backgroundColor3" backcolor="#6287BA" id="backgroundColor3{tabCounter}" onclick="changeBackgroundColor(this)"></label>
                <label class="color-picker form-control backgroundColor4" backcolor="#707B89" id="backgroundColor4{tabCounter}" onclick="changeBackgroundColor(this)"></label>
                <label class="color-picker form-control backgroundColor5" backcolor="#d9d5d1" id="backgroundColor5{tabCounter}" onclick="changeBackgroundColor(this)"></label>
                <label class="color-picker form-control backgroundColor6" backcolor="#ebe8e5" id="backgroundColor6{tabCounter}" onclick="changeBackgroundColor(this)"></label>
            </div>
            <div class="form-group">
                <label for="linkUrl{tabCounter}">Link URL</label>
                <input type="url" class="form-control" id="linkUrl{tabCounter}" placeholder="Enter URL">
            </div>
            <div class="form-group">
                <label for="linkName{tabCounter}">Link Name</label>
                <input type="text" class="form-control" data-target-id="readmorelink{tabCounter},readmorelinkSpanish{tabCounter}" id="linkName{tabCounter}" placeholder="Enter link name" onchange="changeTextContent(this)">
            </div>
        </form>
    </div>
</div>
`;

function GetTemplate(valtabCounter){
    let tabCounter = valtabCounter;
    const regex = /{tabCounter}/gi;
    return teplateContentTab.replaceAll(regex, `-${tabCounter}`);
}