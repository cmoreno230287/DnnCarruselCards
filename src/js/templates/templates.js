const teplateContentTab = `
                <div class="row mt-4">                
                <input type="hidden" id="showcard{tabCounter}" value="true"/>
    <div class="form-group row">
        <label for="scaleRange{tabCounter}" class="col-sm-1 col-form-label">Size</label>
        <div class="col-sm-2">
            <input type="range" class="form-control-range mt-3" id="scaleRange{tabCounter}" min="10" max="200" value="100">
        </div>
        <div class="col-sm-4">						
        </div>
        <div class="col-sm-4 pipe">
            <a href="#" id="eyebutton{tabCounter}" class="bi bi-eye icontool" onclick="ShowHideCard()"></a>
			<a href="#" class="bi bi-floppy icontool"></a>
        </div>
    </div>
    <input type="file" id="file-input{tabCounter}" accept="image/*" onchange="loadImage(event)" class="file-input">
    <div class="col-md-4">                    
        <div class="card" style="width: 300px;">
            <div class="image-wrapper">						  
                <div id="image-container{tabCounter}" class="image-container card-img-top" ondblclick="document.getElementById('file-input{tabCounter}').click();">
                <img id="image{tabCounter}" class="image" draggable="false">
                </div>
            </div>						
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
        </div>
    </div>
    <div class="col-md-6">
        <form>
            <div class="form-group">
            <label for="title{tabCounter}">Title</label>
            <input type="text" class="form-control" id="title{tabCounter}" placeholder="Enter title">
            </div>
            <div class="form-group">
            <label for="description{tabCounter}">Description</label>
            <textarea class="form-control" id="description{tabCounter}" placeholder="Enter description" rows="3"></textarea>
            </div>
            <div class="form-group">
            <label for="legend{tabCounter}">Legend</label>
            <input type="text" class="form-control" id="legend{tabCounter}" placeholder="Enter legend">
            </div>
            <div class="form-group">
            <input type="color" class="color-picker form-control" id="backgroundColor{tabCounter}">
            <label for="backgroundColor{tabCounter}">Select Background Color</label>
            </div>
            <div class="form-group">
            <label for="linkUrl{tabCounter}">Link URL</label>
            <input type="url" class="form-control" id="linkUrl{tabCounter}" placeholder="Enter URL">
            </div>
            <div class="form-group">
            <label for="linkName{tabCounter}">Link Name</label>
            <input type="text" class="form-control" id="linkName{tabCounter}" placeholder="Enter link name">
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