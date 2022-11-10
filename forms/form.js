// // $(document).ready(function(){
// //     $("#submit-form").validate({
// //         rules:{
// //             name:{
// //                 required:true,
// //                 minlength:3,
// //                 maxlength:22
// //             },
// //             emailAddress:{
// //                 required:true,
// //                 email:true
// //             },
// //             subject:{
// //                 required:true,
// //                 minlength:3
// //             },
// //             message:{
// //                 required:true,
// //                 minlength:2
// //             }
// //         }
// //     })
// // })

// // $("#submit-form").submit((e)=>{
// //     e.preventDefault()
// //     $.ajax({
// //         url:"https://script.google.com/macros/s/AKfycbzU_cmIKKNhKNPa7gwkHnojI15_HcQb08Am--WJ3WkPpuyn89-Bw_k6VXBCv4o8YLSs/exec",
// //         data:$("#submit-form").serialize(),
// //         method:"post",
// //         success:function (response){
// //             alert("Form submitted successfully")
// //             window.location.reload()
// //             //window.location.href="https://google.com"
// //         },
// //         error:function (err){
// //             alert("Something Error")

// //         }
// //     })
// // })



$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
                minlength:3,
                maxlength:22
            },
            emailAddress:{
                required:true,
                email:true
            },
            subject:{
                required:true,
                minlength:3
            },
            message:{
                required:true,
                minlength:2
            }
        },
        submitHandler: function (form, event) {

            $.ajax({
                url:"https://script.google.com/macros/s/AKfycbzU_cmIKKNhKNPa7gwkHnojI15_HcQb08Am--WJ3WkPpuyn89-Bw_k6VXBCv4o8YLSs/exec",
                data:$("#submit-form").serialize(),
                method:"post",
                success:function (response){
                    alert("Form submitted successfully")
                    form.reset();
                },
                error:function (err){
                    alert("Something Error")
        
                }
            })
            return false;
        }
    })
})