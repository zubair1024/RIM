Ext.define('rim.view.MainApp', {
    extend  : 'Ext.TabPanel',
    alias   : 'widget.main_app',
    requires: [
        'rim.view.FindTerminal'
    ],
    config  : {
        layout: {
            type     : 'card',
            animation: {
                type: 'fade'
            }
        },
        tabBarPosition: 'bottom',
        defaults: {
            styleHtmlContent: true
        },
        items : [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'Inventory Management',
                items:[
                    {
                        xtype : 'button',
                        text  : '...'
                    },
                    {
                        xtype : 'spacer',
                        text  : '...'
                    },
                    {
                        //xtype : 'LogOut',
                        text  : 'LogOut'
                    }
                ]
            },
            {
                title: 'Inspection',
                xtype: 'findTerminal',
                itemId:'findTerminal',
                iconCls: 'search'
            },
            {
                title: 'Find',
                xtype: 'findTerminal',
                itemId:'findTerminal',
                iconCls: 'search'
            }
        ]
    }
});