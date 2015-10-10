Ext.define('rim.view.Details', {
    extend    : 'Ext.form.Panel',
    alias     : 'widget.details',
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
        console.log('Search for: '+domainObjectName)
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
                                html : response.assetName
                            },
                            {
                                xtype: 'textfield',
                                label: 'Customer',
                                html : response.customer
                            }]
                });
            }
        });
    }
})
;
