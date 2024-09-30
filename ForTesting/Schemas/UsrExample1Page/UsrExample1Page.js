define("UsrExample1Page", ["ConfigurationConstants"], function(ConfigurationConstants) {
	return {
		entitySchemaName: "UsrExample",
		attributes: {
          "CurrentActiveTab": {
                dataValueType: Terrasoft.DataValueType.TEXT,
                type: Terrasoft.ViewModelColumnType.VIRTUAL_COLUMN,
                value: "" // Initial value, empty by default
            }
        },
		modules: /**SCHEMA_MODULES*/{}/**SCHEMA_MODULES*/,
		details: /**SCHEMA_DETAILS*/{
			"Files": {
				"schemaName": "FileDetailV2",
				"entitySchemaName": "UsrExampleFile",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrExample"
				}
			},
			"VisaDetailV2e3e76d70": {
				"schemaName": "VisaDetailV2",
				"entitySchemaName": "UsrExampleVisa",
				"filter": {
					"masterColumn": "Id",
					"detailColumn": "UsrExample"
				}
			}
		}/**SCHEMA_DETAILS*/,
		businessRules: /**SCHEMA_BUSINESS_RULES*/{}/**SCHEMA_BUSINESS_RULES*/,
		methods: {
            onActiveTabChange: function(activeTab) {
                // Store the active tab identifier
                this.set("CurrentActiveTab", activeTab);
            },
          
            setValidationConfig: function() {
                this.callParent(arguments);
                this.addColumnValidator("UsrName", this.nameFieldsValidator);
                //this.addColumnValidator("UsrLastName", this.nameFieldsValidator);
                this.addColumnValidator("UsrPhoneNumber", this.phoneFieldsValidator);
            },

            nameFieldsValidator: function(value, column) {
                var invalidMessage = "";
                var firstName = this.get("UsrName");
                console.log("Name:", firstName);
                if (Ext.isEmpty(firstName)) {
                    invalidMessage = this.get("Resources.Strings.InvalidNameMessage");
                    // Switch to the tab containing the first name field
                    console.log("Switching to name tab:", invalidMessage);
                    this.set("CurrentActiveTab", "Tabbfc229c0TabLabel"); // Assuming "NameTab" is the tab identifier
                }
                return { invalidMessage: invalidMessage };
            },

            phoneFieldsValidator: function(value, column) {
              var invalidMessage = "";
              var phoneNumber = this.get("UsrPhoneNumber");
              console.log("Phone number:", phoneNumber);
              if (Ext.isEmpty(phoneNumber)) {
                  invalidMessage = this.get("Resources.Strings.InvalidPhoneNumberMessage");
                  console.log("Switching to phone tab:", invalidMessage);
                  this.set("CurrentActiveTab", "Tab68b5b8f6TabLabel"); // Ensure this is correct
              }
              return { invalidMessage: invalidMessage };
          }
        },
		dataModels: /**SCHEMA_DATA_MODELS*/{}/**SCHEMA_DATA_MODELS*/,
		diff: /**SCHEMA_DIFF*/[
			{
				"operation": "insert",
				"name": "Tabs",
				"values": {
					"tabs": [
						{
							"name": "MainTab",
							"caption": {
								"bindTo": "Resources.Strings.MainTabCaption"
							},
							"items": [],
							"change": {
								"bindTo": "onActiveTabChange"
							}
						},
						{
							"name": "AdditionalTab",
							"caption": {
								"bindTo": "Resources.Strings.AdditionalTabCation"
							},
							"items": [],
							"change": {
								"bindTo": "onActiveTabChange"
							}
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Tabbfc229c0TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbfc229c0TabLabelTabCaption"
					},
					"items": [],
					"order": 0
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabbfc229c0TabLabelGroup72cd9c7d",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tabbfc229c0TabLabelGroup72cd9c7dGroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tabbfc229c0TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tabbfc229c0TabLabelGridLayout888726bc",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tabbfc229c0TabLabelGroup72cd9c7d",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrLastnameca4c8bed-e9c1-41db-bebd-db81e76f6bd9",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tabbfc229c0TabLabelGridLayout888726bc"
					},
					"bindTo": "UsrLastname"
				},
				"parentName": "Tabbfc229c0TabLabelGridLayout888726bc",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrMiddlename495b5b35-d21e-47fa-b24e-c25011f5c80f",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tabbfc229c0TabLabelGridLayout888726bc"
					},
					"bindTo": "UsrMiddlename"
				},
				"parentName": "Tabbfc229c0TabLabelGridLayout888726bc",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName8bfc29d5-6e96-416f-b0d2-2a6a4b339920",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 12,
						"row": 0,
						"layoutName": "Tabbfc229c0TabLabelGridLayout888726bc"
					},
					"bindTo": "UsrName"
				},
				"parentName": "Tabbfc229c0TabLabelGridLayout888726bc",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Tab68b5b8f6TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab68b5b8f6TabLabelTabCaption"
					},
					"items": [],
					"order": 1
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Tab68b5b8f6TabLabelGroup96b8b483",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.Tab68b5b8f6TabLabelGroup96b8b483GroupCaption"
					},
					"itemType": 15,
					"markerValue": "added-group",
					"items": []
				},
				"parentName": "Tab68b5b8f6TabLabel",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Tab68b5b8f6TabLabelGridLayout7be83edd",
				"values": {
					"itemType": 0,
					"items": []
				},
				"parentName": "Tab68b5b8f6TabLabelGroup96b8b483",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING52f93db0-93c2-4bae-8545-fc6276b0858d",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 0,
						"layoutName": "Tab68b5b8f6TabLabelGridLayout7be83edd"
					},
					"bindTo": "UsrPhoneNumber",
					"enabled": true
				},
				"parentName": "Tab68b5b8f6TabLabelGridLayout7be83edd",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "STRING2a5cf5ec-1cb4-4d6c-9c3d-5bd887b3af19",
				"values": {
					"layout": {
						"colSpan": 12,
						"rowSpan": 1,
						"column": 0,
						"row": 1,
						"layoutName": "Tab68b5b8f6TabLabelGridLayout7be83edd"
					},
					"bindTo": "UsrEmail",
					"enabled": true
				},
				"parentName": "Tab68b5b8f6TabLabelGridLayout7be83edd",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "NotesAndFilesTab",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.NotesAndFilesTabCaption"
					},
					"items": [],
					"order": 2
				},
				"parentName": "Tabs",
				"propertyName": "tabs",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Files",
				"values": {
					"itemType": 2
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "NotesControlGroup",
				"values": {
					"itemType": 15,
					"caption": {
						"bindTo": "Resources.Strings.NotesGroupCaption"
					},
					"items": []
				},
				"parentName": "NotesAndFilesTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Notes",
				"values": {
					"bindTo": "UsrNotes",
					"dataValueType": 1,
					"contentType": 4,
					"layout": {
						"column": 0,
						"row": 0,
						"colSpan": 24
					},
					"labelConfig": {
						"visible": false
					},
					"controlConfig": {
						"imageLoaded": {
							"bindTo": "insertImagesToNotes"
						},
						"images": {
							"bindTo": "NotesImagesCollection"
						}
					}
				},
				"parentName": "NotesControlGroup",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "merge",
				"name": "ESNTab",
				"values": {
					"order": 3
				}
			},
			{
				"operation": "insert",
				"propertyName": "tabs",
				"parentName": "Tabs",
				"name": "Tab74660c44TabLabel",
				"values": {
					"caption": {
						"bindTo": "Resources.Strings.TabVisaCaption"
					},
					"items": []
				}
			},
			{
				"operation": "insert",
				"propertyName": "items",
				"parentName": "Tab74660c44TabLabel",
				"name": "VisaDetailV2e3e76d70",
				"values": {
					"itemType": 2,
					"markerValue": "added-detail"
				}
			}
		]/**SCHEMA_DIFF*/
	};
});
