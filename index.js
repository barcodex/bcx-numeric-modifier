exports.apply = apply;

/*
value   - base value to modify
name    - name of the modifier
params  - parameters of the modifier
data    - array of data that is available for processing
options - additional options for numeric modifier
*/
function apply(value, name, params, data, options) {
	options = options || {};
	switch(name) {
        case 'circumference':
            value = 2 * Math.PI * value;
            break;
        case 'round':
            value = Math.round(value);
            break;
		case 'htmlcomment':
        	value = '<!--' + value.toString() + '-->';
        	break;
    }

    return value;
}
