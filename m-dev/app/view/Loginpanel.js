Ext.define('rim.view.Loginpanel', {
    extend: 'Ext.Panel',
    alias : 'widget.loginpanel',
    config: {
        layout    : {
            type: 'vbox',
            pack: 'center'
        },
        scrollable: {
            direction    : 'vertical',
            directionLock: true
        },
        items     : [
            {
                xtype : 'image',
                src   : '../../images/logos/footer-default.png',
                height: 94,
                width : '100%'
            }, {
                xtype: 'fieldset',
                style: '  margin: 0 0.8em 0 0.8em;',
                items: [
                    //{
                    //    xtype       : 'selectfield',
                    //    label       : 'Application',
                    //    itemId      : 'applicationId',
                    //    valueField  : 'id',
                    //    displayField: 'applicationName',
                    //    labelWidth: '30%',
                    //    labelWrap: true
                    //}
                    //,
                    {
                        xtype : 'textfield',
                        label : 'Username',
                        name  : 'username',
                        itemId: 'username',
                        labelWidth: '30%',
                        labelWrap: true
                    }, {
                        xtype    : 'passwordfield',
                        label    : 'Password',
                        name     : 'password',
                        itemId   : 'password',
                        clearIcon: false,
                        labelWidth: '30%',
                        labelWrap: true
                    }
                ]
            }, {
                xtype : 'button',
                border: 2,
                margin: '40 10 0 10',
//                width : '45%',
                text  : 'Login',
                id    : 'btnLogin'
            }
        ]
    }
});