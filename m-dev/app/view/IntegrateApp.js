Ext.define('rim.view.IntegrateApp', {
    extend  : 'Ext.Panel',
    alias   : 'widget.integrate_app',
    requires: [
        'rim.view.Loginpanel',
        //'rim.view.FindTerminal',
        'rim.view.MainApp'
    ],
    config  : {
        layout: 'card',
        items : [
            {
                xtype: 'loginpanel',
                itemId:'loginpanel'
            },
            {
                xtype: 'main_app',
                itemId:'main_app'
            },
            {
                xtype: 'details',
                temId:'details'
            },
            {
                xtype: 'inspection',
                temId:'inspection'
            }
        ]
    }
});