function GetPassWord (password,key)
      {
          //获取HmacSHA256结果
          var code_byte=CryptoJS.HmacSHA256(password,key, { asBytes: true });
          //转换Base64
          var code_base_64=CryptoJS.enc.Base64.stringify(code_byte);
          //去末尾等号
          if (code_base_64.charAt(code_base_64.length-1)=='=')
          {
              code_base_64=code_base_64.slice(0,code_base_64.length-1);
          }
          //URL_SAFE化
          code_base_64=code_base_64.replace(/\//g,'_');
          code_base_64=code_base_64.replace(/\+/g,'-');
          code_base_64=code_base_64.replace(/[\r|\n]/g,"");
          //切割处理字符串
          var head_char=code_base_64.charAt(0);
          var code_16;
          if (head_char==='_'||head_char==='-'||!isNaN(head_char))
          {
              code_16=code_base_64.slice(code_base_64.length-16,code_base_64.length);
              head_char=code_16.charAt(0);
              if (head_char=='-'||head_char=='_'||!isNaN(head_char))
              {
                  code_16='K'+code_16.slice(1,16);
              }
          }
          else
          {
              code_16=code_base_64.slice(0,16);
          }
          return code_16;
      }
      function ComputePassWord ()
      {
          var mem_pwd=document.getElementById("memory_password").value;
          var diff_code=document.getElementById("diff_code").value;
          if (mem_pwd==""||mem_pwd==null||diff_code==""||diff_code==null)
          {
              alert("缺少信息无法生成");
              return;
          }
          var pwd=GetPassWord(mem_pwd,diff_code);
          document.getElementById("created_password").innerHTML=pwd;
      }
