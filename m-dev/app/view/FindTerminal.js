Ext.define('rim.view.FindTerminal', {
    extend: 'Ext.Panel',
    alias : 'widget.findTerminal',
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
            //{
            //    xtype : 'image',
            //    src   : '../../images/logos/footer-default.png',
            //    height: 94,
            //    width : '100%'
            //},
            {
                xtype: 'fieldset',
                style: '  margin: 0 0.8em 0 0.8em;',
                items: [
                    {
                        xtype       : 'selectfield',
                        label       : 'Type',
                        itemId      : 'domainObjectTye',
                        //valueField  : 'id',
                        //displayField: 'domainObjectType',
                        options: [
                            {text: 'Asset',  value: 'Asset'},
                            {text: 'Remote Terminal', value: 'Remote Terminal'},
                            {text: 'Remote Communicator',  value: 'Remote Communicator'},
                            {text: 'SIM Number',  value: 'SIM Number'}
                        ],
                        labelWidth: '30%',
                        labelWrap: true
                    },
                    {
                        xtype : 'textfield',
                        label : 'Name',
                        name  : 'domainObjectName',
                        itemId: 'domainObjectName',
                        labelWidth: '30%',
                        labelWrap: true
                    }
                ]
            },
            {
                xtype : 'button',
                border: 2,
                margin: '40 10 0 10',
                //width : '45%',
                text  : 'Find',
                id    : 'btnFind',
                ui: 'confirm'
            }
        ]
    }
});