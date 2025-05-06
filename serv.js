var requestBody = ""; 

var client=new XMLHttpRequest();
client.open("get","https://dev340953.service-now.com/api/now/table/incident?sysparm_query=caller_id%3D77ad8176731313005754660c4cf6a7de&sysparm_display_value=true&sysparm_exclude_reference_link=true&sysparm_fields=sys_updated_on%2Corigin_table%2Chold_reason%2Ctask_effective_number%2Capproval_history%2Cresolved_by&sysparm_limit=1");

client.setRequestHeader('Accept','application/json');
client.setRequestHeader('Content-Type','application/json');

//Eg. UserName="admin", Password="admin" for this code sample.
client.setRequestHeader('Authorization', 'Basic '+btoa('admin'+':'+'admin'));

client.onreadystatechange = function() { 
	if(this.readyState == this.DONE) {
		document.getElementById("response").innerHTML=this.status + this.response; 
	}
}; 
client.send(requestBody);