//app.js
//const clo = require('wx-server-sdk')
//clo.init()
const that=this
const runtime=require("utils/regenrator-runtime/runtime.js")

App({

  
  onLaunch: function () {
    wx.cloud.init({
      env:"tycloud-r9mxs",
      traceUser:true
    })
   //this.globalData.Daitotal=10
    // console.log("qu")
    // console.log(this.globalData.Daitotal)

    // չʾ���ش洢����
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // ��¼
    wx.login({
    
      success: res => {
        // ���� res.code ����̨��ȡ openId, sessionKey, unionId
      }
    })
    // ��ȡ�û���Ϣ
    wx.getSetting({
    //   success: res => {
    //     if (res.authSetting['scope.userInfo']) {
    //       // �Ѿ���Ȩ������ֱ�ӵ��� getUserInfo ��ȡͷ���ǳƣ����ᵯ��
    //       wx.getUserInfo({
    //         success: res => {
    //           // ���Խ� res ���͸���̨����� unionId
    //           this.globalData.userInfo = res.userInfo

    //           // ���� getUserInfo ���������󣬿��ܻ��� Page.onLoad ֮��ŷ���
    //           // ���Դ˴����� callback �Է�ֹ�������
    //           if (this.userInfoReadyCallback) {
    //             this.userInfoReadyCallback(res)
    //           }
    //         }
    //       })
    //     }
    //   }
    })
    
  },
 
 
  globalData: {
   Pagelineflag:0,
   DateArray:['����'],
    IncalArray:['��������'],
    ConcalArray:['�˶���������'],
    userInfo: null,
    selectedfood:'',
    foodgram:'',
    foodcal:''
  },
  aData:{   
      selectedfood:'',
    foodgram:'',
    foodcal:'',
    consumecal:0,
    intakecal:0,
    DBweight:0,
    age:0,
    sex:'',
    tall:0,
    weight:0,
    openid:0,
    nickName:'',
    avatarUrl:'',
    BMR:0,
    DBM:0,
    BFR:0,
    BMI:0,
    intakePro:0,
    intakeFat:0,
    intakeCarbe:0,
    HPHF:['�ߵ���С����', '����', '��֬�����⳦', '������˿', '��֬������', '��֬������', '��֬������', '�ߵ���С����', '��֬�����⳦', '��С��',  'Ѽ��', '����', '�з����з��', '����', '������', '���ȳ�', '���ظ���', '�ɰ���', '��Ѽ��', '����(����)', '�߹޼���', '��С��', '����(�̸�)', '�����', '��֬�����⳦', '�ɻ���(Ѽ��)', '��֬������', '��֬������', '��֬���弦���', '��֬�����⳦', '����', '����(����)', '��������Ƥ��', '����(��Ƥ)', '����', '��ţ��', '����', '�㳦', '�ϵ»� ˱ָԭζ��', '����', '����', 'ţ���', '��Ѽ������', '����', '����', '�ȹ���', '���ȵ�', '����', '��Ϻ', '������Ѽ', '��Ƭ��', '��צ', '������', '���ͼ嵰', '������', '�㶫�㳦', '�ϵ»� �°¶�������', '����(С�ƻ���)', '����', 'Ѽ��', '������', '����(�Ｙ)', '���� ������', '��Ѫ', 'Ϻ�ʣ��죩', '����(������)', 'ϺƤ', '���⴮(��)', '��ΧϺ', '���', 'Ѽ�ظ���', 'Ϻ��', '����(����)', '������', 'ī����', '����(��ƻ���)', '����', '��Ƥ��', '��Ѽ', '��Ϻ', 'Ѽ��', '�����Ѭ�⣩', '���� ���ּ�', 'Ϻ��', '���� ��Ǽ���', '���� ��������'],
    HPLF:['����', 'ţ��', '����ȫ֬����', '����', '���̣���֬��', '��֬�̷�', '���̣���ζ��', '����(����)', '���̣�������', '��ţ �߸�ţ��', '��֬ţ��', '���� e+��������ţ��', '��֬ţ��', '�����', '���̣��ߵ��ף�', '��Ƭ', '��ţ��', '��Ʒ����ţ��', '��Ʒ����֬��ţ��', '��ʿɱ��������', 'ȫ����', '��ţ��', 'ţ��(ǿ��VA��VD)', '��֬ţ��', 'ľ�Ǵ���ţ��', '��֬����', '������������ţ��', '��ţ��ţ��', '������֬90%��֬��ţ��', '������Ʒ���������飨ԭζ��', '�������ź��������֬����', '����«������', '������ţ��(ԭζ)', '�����������ţ�̣����+��ݮ+Ҭ����', '����', '������Ʒ������������ţ��', '�����ţ���Ʒ��ţ��(������', 'ţ��', '��ţ��������Ʒ��ţ�̣�ԭζ��', '��ţ��ţ�̣���ݮζ��', 'ζȫ�����飨ԭζ��', '��ţ��������Ʒ��ţ��ľ�Ǵ�ζ', '������Ʒ����������', '�����������̣����ҹ���', '��ţ��ţ�̣�ԭζ�� ', 'ţ��', '��֥֬ʿƬ', '���ֱ�����֪ζ������ţ��', '������������', 'ţ��', , '��������������', '����', '����������������ţ��', '�����������ţ��', '������֬90%��ţ��', '���ֱ��߸���������ţ��', 'ѧ����', '������������ţ��', '����ABLS��������ţ��', '��������B+100����������������ţ��', '������֥��������', '������ţ��', 'ţ��', '��ţ��֥�ص�֬�������', 'ţ��', '����������ң��߸ƣ�', 'ζȫ��������ţ�̽�������', '��ʿ�������ζ��ţ��', '�������ܲ�ݮ������ţ��', '������������', '��ţ��ţ��', '������������ţ��', '��ţ������ھ���������ţ��', '���� 90%��֬��ţ��', '�����������', '���������ݱ���ţ��', '����ԭζ��ţ��', '��ʿ�������ζ��ţ��'],
    LPHF:['��ʽ������', '������', '����', '���ŵ����ʶ���ѩ��', '���ŵ�֬���ζѩ��', '����', '����', '�ɿ������׻�', '����ɿ�����', '�ɿ������ȶ�', '���ɲ�ݮ�ɿ���', '����������', '�ɿ���', '�����', '�����', '�������', '�̶���', '�մ����', '�黨', '���͵���', '��֮��÷', '�±�(��ɳ)', 'ɽ髹���Ƥ', '����', 'ɳ���군��', '�ߵ��׼��ľ�', '���㺺��', '�̶���', '��ʽ����', 'ɽ���', '��ܽ��Ũ���ɿ���', '�����ֱ�', '�±�(����)', '���ͣ����㣩', '���ͣ�С�ף�', '��Ƭ���տ�ζ��', '����', '�����ֱ�', '�ɿ���(ά��)', '����', '�����', '���⣨�ɿ�����', '���ͱ���', '��Ƥ���', '��·ѩ�̶����ñ���', '��������ף�', '�ϵ»�����', '���׻�', '����', 'ʱ��¡����˿', '���ֱ� �ɿ���ѩ��', '��ѩ��', '���ɣ��մ���ģ�', '�����ѵ�����', '��·ѩ�춹���� ', 'ţ����', '̫ƽ �����ɺ�̦��ζ', '��֭ζ�ɴ���', '�϶�(ը)', '�ɿ������ڣ�', '������������ͣ�', '����������', '��ɫ��������˿', '��������', 'ѩ�ױ�', '���⣨ˮ����', '����', 'ˮ����', '��̦', '���ʹ����', 'άά�����', '���ܼѸ�ţ�����ֱ���ţ�̿�ζ', 'ţ�̱���', '������', '����ѩ��', '��Ƭ������ζ��', '����裨��Ƥ��Ͳ��', '���ɣ��̣�', '�±�(����)', '������', '��������', '���黨', '���Ǹ��', '�����', '�������������', '�������׻�', '������Ƭ��Ũ����ζ', '�±���������ܿ��', '����֥����', '��ܽ����ɿ���']
    LPLF:['ƻ��', '��ײ�', 'С�ײ�', '�㽶', '����', '�ƹ�','��֬ħ��ˬ', '��֬ħ��ˬ������ζ��', '����', '����', '�Ϻ���', '�츻ʿƻ��', '����', '����', '������', '����', '���ܲ�', '��', '����', '����', '����', '⨺���', '�Ϲ�', '���ܲ�', '����', '����', 'ľ��', '����', 'ʥŮ��', '����', '���ܲ�', '���Ĳ�', '����', '����', '����', 'ݩ��', 'ľ��', '����', '����', '����', '������', '��ݮ', 'â��', '��ѿ', '�㹽', '����', '���ܹ�', '���', '����', '����', '�۲�', 'ͨ�Ĳ�', '����', '���Ȳ�', 'ľ��', '�㶹��', 'С��', '�������Ӹ�', '���Ѹ�', '�ཷ', '���', '���빽', '��ź', '����������', '����', '��֦', '����', '�������', 'ӣ��', '��ѿ', '���', 'СҶ��', '����', '�۲˾�', '�����', '˿��', '�޷�����', '������', '����������', 'ɣ��', '�ϲ�', '����ƻ��', '�ļ���', 'ݫ��', 'Ģ��', '������', '����', '��', '��']
  },
  suggestion:function(){
    var stdHeat=this.aData.DBM
    var stdPro=stdHeat*0.15/4.0    //����ÿ������PRO�ı�׼��g��
    var stdFat=stdHeat*0.25/9.0    //����ÿ������Fat�ı�׼
    var stdCarbe=35            //ÿ����ά�������׼
    var intakePro=this.aData.intakePro
    var intakeFat=this.aData.intakeFat
    var intakeCarbe=this.aData.intakeCarbe
    var intakeHeat=this.aData.intakecal
    var advice=""
    if(intakeHeat < stdHeat){
      if(intakePro < stdPro && intakeFat < stdFat && intakeCarbe < stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"���走����"+(stdPro-intakePro).toFixed(1)+"��,֬��"+(stdFat-intakeFat).toFixed(1)+"��,��ά��"+(stdCarbe-intakeCarbe).toFixed(1)+"��\n"+"�����Щ"+HPHF[Math.random()*HPHF.count()]+"��"+LPLF[Math.random()*LPLF.count()]
      }
      else if(intakePro >= stdPro && intakeFat < stdFat && intakeCarbe < stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"����֬��"+(stdFat-intakeFat).toFixed(1)+"��,��ά��"+(stdCarbe-intakeCarbe).toFixed(1)+"��\n"+"�����Щ"+LPHF[Math.random()*LPHF.count()]+"��"+LPLF[Math.random()*LPLF.count()]
      }
      else if(intakePro < stdPro && intakeFat >= stdFat && intakeCarbe < stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"���走����"+(stdPro-intakePro).toFixed(1)+"��,��ά��"+(stdCarbe-intakeCarbe).toFixed(1)+"��\n"+"�����Щ"+HPLF[Math.random()*HPLF.count()]+"��"+LPLF[Math.random()*LPLF.count()]
      }
      else if(intakePro < stdPro && intakeFat < stdFat && intakeCarbe >= stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"���走����"+(stdPro-intakePro).toFixed(1)+"��,֬��"+(stdFat-intakeFat).toFixed(1)+"��\n"+"�����Щ"+HPHF[Math.random()*HPHF.count()]
      }
      else if(intakePro >= stdPro && intakeFat >= stdFat && intakeCarbe < stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"������ά��"+(stdCarbe-intakeCarbe).toFixed(1)+"��\n"+"�����Щ"+LPLF[Math.random()*LPLF.count()]
      }
      else if(intakePro >= stdPro && intakeFat >= stdFat && intakeCarbe >= stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"+
        "�����Щ"+LPLF[Math.random()*LPLF.count()]
      }
      else if(intakePro < stdPro && intakeFat >= stdFat && intakeCarbe >= stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"���走����"+(stdPro-intakePro).toFixed(1)+"��\n"+"�����Щ"+LPHF[Math.random()*LPHF.count()]
      }
      else if(intakePro >= stdPro && intakeFat < stdFat && intakeCarbe >= stdCarbe){
        advice="�����뵰����"+intakePro.toFixed(1)+"��,֬��"+intakeFat.toFixed(1)+"��,��ά��"+intakeCarbe.toFixed(1)+"��\n"
        +"����֬��"+(stdFat-intakeFat).toFixed(1)+"��\n"+"�����Щ"+HPHF[Math.random()*HPHF.count()]+"��"+LPHF[Math.random()*LPLF.count()]
      }
    }
  }
})
