echo ' You are in the server';

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['quote_form'])) {
    // Get the data from the POST request
    $name = $_POST['first_name'].' '.$_POST['last_name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];

    // Send email
    $to = 'business@sapdalimited.co.ke';
    $subject = 'A user wants to get a quote from website';
    
    $body = "First Name: $name\nEmail: $email\nPhone: $phone\nMessage: $message";
    
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Email sent successfully';
        return 'Email sent successfully';
    } else {
        echo 'Failed to send email';
        return 'Failed to send email';
    }
}


//contact us processing
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['contact_form'])){
    // Get the data from the POST request
    $name = $_POST['first_name'].' '.$_POST['last_name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Send email
    $to = 'contact-us@sapdalimited.co.ke';
    $subject = 'New message from website';
    $body = "Name: $name\nEmail: $email\nMessage: $message\nPhone: $phone";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        //return with http response

        return 'Email sent successfully';
        
    } else {
        return 'Failed to send email';
    }
}
