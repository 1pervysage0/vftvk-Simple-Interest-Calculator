function simple()
{
	var p=getElementsById('principal');
	var r=getElementsById('interest');
	var t=getElementsById('time');
	var i,s;
	if(p!='')
	{
       i=(p*r*t)/100;
       s=p+i;
       alert("total sum will be  "+s+" with interest of"+i);
       return true;
	}
	return false;
}