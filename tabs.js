var aba = TabControl("lateral",220,100);
function TabControl(secMaster,tabWidth,tabHeight){
	this.tabs = 0;
	this.addTab = addTab;
	this.id  = secMaster;
	
	Construtor(tabWidth,tabHeight);

	this.Container = getObj(secMaster+".Container");
	this.Header = getObj(secMaster+".Header");
	this.Body = getObj(secMaster+".Body");

	function Construtor(tabWidth,tabHeight){
		var idContainer = secMaster+".Container";
		var idHeader = secMaster+".Header";
		var idBody = secMaster+".Body";

		this.Container = getObj(secMaster);
		this.Container.innerHTML =  "<section id='"+idContainer+"' class='AbaContainer'></section>" + this.Container.innerHTML;
		this.Container = document.getElementById(idContainer);
		this.Container.innerHTML = "<section id='"+idHeader+"' Class='AbaHeader'></section>" + "<section id='"+idBody+"' Class='AbaBody'></section>"
		this.Header = getObj(idHeader);
		this.Body = getObj(idBody);
		
		this.Container.style.width = tabWidth;
		this.Container.style.height = tabHeight;
	}

	function addTab(divTab,TitleTab){
		var htmlHeader = "";
		var htmlBody = "";
		var objDivOld = getObj(divTab);
		var bodyClass = "TabBodyHidden";
		var headerClass = "TabHeaderHidden";
		
		if(!TitleTab)
			TitleTab = divTab;
		if(this.tabs == 0)
			bodyClass = "TabBodyInline";
		if(this.tabs == 0)
			headerClass = "TabHeaderInline";
		
		htmlHeader = "<Span onClick='changeTabControl(this.id)' id='"+this.id+".Header.Tab."+this.tabs+"' Class='"+headerClass+"'>"+TitleTab+"</Span>&nbsp;";
		htmlBody = " <Span id='"+this.id+".Body.Tab."+this.tabs+"' Class='"+bodyClass+"'>"+objDivOld.innerHTML+"</Tab>";
		objDivOld.innerHTML = "";
				
		Header.innerHTML = Header.innerHTML + htmlHeader;
		Body.innerHTML = Body.innerHTML + htmlBody;		
		
		this.tabs++;
	}
}
function changeTabControl(Tab){
	var id = Tab.split(".");
	var i = 0;
	var j = 0;
	
	while(getObj(id[0]+".Header.Tab."+i))
	{
		getObj(id[0]+".Header.Tab."+i).className = "TabHeaderHidden"
		i++;
	}
	getObj(Tab).className = "TabHeaderInline";	

	i=0;
	while(getObj(id[0]+".Body.Tab."+j))
	{
		getObj(id[0]+".Body.Tab."+j).className = "TabBodyHidden"
		j++;
	}
	getObj(id[0]+".Body.Tab."+id[3]).className = "TabBodyInline";		
	
}
function getObj(idObj)	{
	return document.getElementById(idObj);
}