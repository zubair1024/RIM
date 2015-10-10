Ext.define('rim.controller.SessionController', {
    extend: 'Ext.app.Controller',
    requires: [
        'Ext.Ajax',
        'Ext.util.JSONP',
        'Ext.data.Model',
        'rim.view.IntegrateApp',
        'rim.view.Loginpanel',
        'rim.view.FindTerminal',
        'rim.view.Details',
        'rim.view.Inspection'
    ],
    config: {
        refs: {
            applicationId: 'loginpanel selectfield',
            userName: 'loginpanel textfield[name=username]',
            password: 'loginpanel passwordfield',
            logoutTab: 'launchapp #logout',
            integrateApp: 'integrate_app',
            findItem: 'findTerminal #domainObjectName',
            launchApp: 'launchapp',
            //Finding Terminal
            findBtn: 'findTerminal #btnFind',
            details: 'details',
            detailsBackBtn: 'details #detailsBack',
            mainApp: 'main_app',
            inspectionSheet: 'inspection',
            inspectionSheetSubmitBtn: 'inspection fieldset button',
            inspectionSheetSubmitBtnFieldset: 'inspection fieldset'
        },
        control: {
            '#btnLogin': {
                tap: 'login'
            },
            logoutTab: {
                activate: 'logout'
            },
            'loginpanel textfield': {
                keyup: 'onKeyUp'
            },
            'detailsBackBtn': {
                tap: function () {
                    this.getIntegrateApp().setActiveItem('main_app');

                }
            },
            findBtn: {
                tap: function () {
                    console.log('Find Tapped');
                    var domainObjectName = this.getFindItem().getValue();
                    this.getFindItem().setValue('');
                    if (domainObjectName.length) {
                        if(this.getMainApp().getActiveItem().title == 'Find'){
                            this.getIntegrateApp().setActiveItem('details');
                            this.getDetails().updateData('Terminal', domainObjectName);
                        }else{
                            this.getIntegrateApp().setActiveItem('inspection');
                            this.getInspectionSheet().updateData('Terminal', domainObjectName);
                        }
                    } else {
                        Ext.Msg.alert('Error', 'Please specify the name of the terminal');
                    }
                }
            },
            inspectionSheetSubmitBtn:{
                tap: function () {
                    console.log('inspectionSheetSubmitBtn');
                    console.log(this.getInspectionSheetSubmitBtnFieldset());
                    var location = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(4).getValue();
                    var person = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(5).getHtml();
                    var startDate = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(6).getValue();
                    var endDate = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(7).getValue();
                    var agenda = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(8).getValue();
                    var inspectionReport = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(9).getValue();
                    var comments = this.getInspectionSheetSubmitBtnFieldset().getItems().getAt(11).getValue();

                    Ext.Ajax.request({
                        async  : false,
                        url    : '../UploadInspectionSheet.php',
                        method : 'post',
                        params : {
                            location    : location

                        },
                        success: function (response) {
                            console.log('success');
                        }
                    });
                }
            }
        }
    },
    launch: function () {
        console.log('launch');
        var username = this.getUserName().setValue('SysAdmin');
        var password = this.getPassword().setValue('W0rking4Every1');
        //var applicationId = this.getApplicationId().setValue('Inventory Management');
    },
    /**
     * Do a login also after hitting on enter.
     * @param fld
     * @param e
     */
    onKeyUp: function (fld, e) {
        // 13 = user tapped 'return/enter' button on keyboard
        if (e.browserEvent.keyCode == 13) {
            this.login();
        }
    },
    login: function () {
        console.log('login');
        var me = this;
        var username = this.getUserName().getValue();
        var password = this.getPassword().getValue();
        //var applicationId = this.getApplicationId().getValue();

        //Ext.data.JsonP.request({
        //    url    : "http://localhost:81/action/service/mobile/remoteTerminalInfo",
        //    params : {
        //        domainObjectName: '12345678910112'
        //    },
        //    success: function (result) {
        //
        //    }
        //});

        //Ext.data.JsonP.request({
        //    url: "http://localhost:81/action/service/mobile/logon",
        //    params: {
        //        username: 'SysAdmin',
        //        password: 'W0rking4Every1',
        //        applicationProviderId: '16204050'
        //    },
        //    success: function (response) {
        //        var data = Ext.decode(response);
        //        console.log(data);
        //        var localStore = Ext.getStore('localStore');
        //        //noinspection JSUnresolvedVariable
        //        if (data.loggedOn) {
        //            // Save SessionId.
        //            App.user = me.getUserName().getValue();
        //            Ext.util.Cookies.set(data.sessionName, data.sessionId);
        //            me.getSettings();
        //            Ext.Viewport.unmask();
        //        }
        //        // Save changes to local store.
        //        //localStore.sync();
        //    }
        //});
        me.getSettings();
    },
    logout: function (ths, newActive, oldActive, option) {
        console.log('logout');
    },
    /**
     * Fetch user settings for timezone, dateformatting and so on.
     */
    getSettings: function () {
        console.log('getSettings');
        console.log(this.getIntegrateApp());
        this.getIntegrateApp().setActiveItem('main_app');
    }
});