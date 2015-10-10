Ext.define('rim.view.Inspection', {
    extend    : 'Ext.form.Panel',
    alias     : 'widget.inspection',
    requires  : [
        'Ext.TitleBar',
        'Ext.dataview.List',
        'Ext.ActionSheet'
    ],
    config    : {
        record    : null,
        scrollable: {
            direction: 'vertical'
        },
        items     : {
            xtype : 'toolbar',
            cls   : 'toolbar-title-font',
            docked: 'top',
            items : [{
                xtype : 'toolbar',
                docked: 'top',
                title : 'Inventory Management',
                items : [
                    {
                        xtype: 'button',
                        text : 'Back',
                        id:'detailsBack',
                        ui:'back'
                    },
                    {
                        xtype: 'spacer',
                        text : '...'
                    },
                    {
                        //xtype : 'LogOut',
                        text: 'LogOut'
                    }
                ]
            }]
        }
    },
    updateData: function (domainObjectType, domainObjectName) {
        var me = this;
        console.log('Search for: '+domainObjectName);
        Ext.data.JsonP.request({
            url    : "http://localhost:81/action/service/mobile/remoteTerminalInfo",
            params : {
                domainObjectName: domainObjectName
            },
            success: function (response) {
                console.log(response);
                me.setItems({
                    xtype: 'fieldset',
                    style: '  margin: 0 0.8em 0 0.8em;',
                    items: [{
                        xtype: 'textfield',
                        label: 'Activation Date',
                        html : response.activationDate

                    }, {
                        xtype: 'textfield',
                        label: 'Asset Group',
                        html : response.assetGroup

                    },
                        {
                            xtype: 'textfield',
                            label: 'Asset Name',
                            html : response.assetName,
                            readOnly: true
                        },
                        {
                            xtype: 'textfield',
                            label: 'Customer',
                            html : response.customer
                        },
                        {
                            xtype: 'selectfield',
                            label: 'Choose one',
                            options: [
                                {text: 'Garage',  value: 'Garage'},
                                {text: 'VCC', value: 'VCC'},
                                {text: 'Deira',  value: 'Deira'}
                            ]
                        },
                        {
                            xtype: 'textfield',
                            label: 'Person Involved',
                            html : App.user
                        },
                        {
                            xtype: 'datepickerfield',
                            label: 'Start Date',
                            name: 'StartDate',
                            value: new Date()
                        },
                        {
                            xtype: 'datepickerfield',
                            label: 'End Date',
                                name: 'EndDate',
                            value: new Date()
                        },
                        {
                            xtype: 'textfield',
                            label: 'Agenda of Visit'
                        },
                        {
                            xtype: 'textareafield',
                            label: 'Inspection Report'
                        },
                        {
                            xtype: 'sliderfield',
                            label: 'Hours Spent',
                            value: 1,
                            minValue: 0,
                            maxValue: 12
                        },
                        {
                            xtype: 'textareafield',
                            label: 'Comments'
                        },
                        {
                            xtype : 'button',
                            border: 2,
                            margin: '40 10 0 10',
                            //width : '45%',
                            text  : 'Submit',
                            id    : 'submit',
                            ui: 'confirm'
                        }
                        ]
                });
            }
        });
    }
})
;
