dojo.provide("cmyk.rules.svgPattern");

dojo.require("cmyk.rules._svgFeature");

/**
	@lends cmyk.rules.svgPattern
*/

dojo.declare("cmyk.rules.svgPattern",cmyk.rules._svgFeature,{
	/** 
	      @constructs
	      @class This is a class that represents an SVG Pattern
	      @memberOf cmyk.rules
	      @extends cmyk.rules._svgFeature
	*/
	constructor: function(node) {
		var _class="cmyk.rules.svgPattern";

		var _attributeFactory = new cmyk.rules.attributes.attributeFactory();

		var _attributes = [];

		dojo.forEach(node.attributes, function(attribute,index,array) {
			_attributes.push(_attributeFactory.factory(attribute.nodeName,attribute.nodeValue,_class));
		});
	},
});
