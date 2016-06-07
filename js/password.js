function GetPassWord (password,key)
      {
          //获取SHA256结果
          var code_byte=CryptoJS.HmacSHA256(password,key, { asBytes: true });
          //alert(code_byte);
          //var code=CryptoJS.enc.Base64
          return "isncuencusjs7db";
      }
      function ComputePassWord ()
      {
          alert('Hello');
          var mem_pwd=document.getElementById("memory_password").value;
          var diff=code=document.getElementById("diff_code").value;
          var pwd=GetPassWord(mem_pwd,diff);
          alert('Hello');
          document.getElementById("created_password").innerHTML="2333";
      }

