dojo.provide("cmyk.rules.attributes.CSSClass");

dojo.require("cmyk.rules.attributes._multiAttribute");

dojo.require("cmyk.utils.Validators");

/**
	@lends cmyk.rules.attributes.CSSClass
*/

dojo.declare("cmyk.rules.attributes.CSSClass",cmyk.rules.attributes._multiAttribute,{
	/** 
	      @constructs
	      @class CSS Class
	      @memberOf cmyk.rules.attributes
	      @extends cmyk.rules.attributes._multiAttribute
	*/
	constructor: function(attribute_value) {
		var _class = "cmyk.rules.attributes.CSSClass";
		this.setName("class");
		this.setSplitter(" ");
		this.setValue(attribute_value);

		var validator = new cmyk.utils.Validators(this.getName(),attribute_value,_class);
		validator.setValidator(validator._ISVALIDCLASS);
		this.setValidator(validator);
	},
});


 
