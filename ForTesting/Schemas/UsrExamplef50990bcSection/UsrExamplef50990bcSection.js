define("UsrExamplef50990bcSection", [], function() {
	return {
		entitySchemaName: "UsrExample",
		details: /**SCHEMA_DETAILS*/{}/**SCHEMA_DETAILS*/,
		diff: /**SCHEMA_DIFF*/[
			{
                "operation": "insert",
                "name": "FetchCustomerDataButton",
                "parentName": "Header",
                "propertyName": "items",
                "values": {
                    "itemType": Terrasoft.ViewItemType.BUTTON,
                    "caption": "Fetch Customer Data",
                    "click": { "bindTo": "onFetchCustomerData" },
                    "style": Terrasoft.controls.ButtonEnums.style.GREEN,
                    "classes": { "textClass": "actions-button-margin-right" }
                },
                "index": 0
            },
		]/**SCHEMA_DIFF*/,
		methods: {}
	};
});
