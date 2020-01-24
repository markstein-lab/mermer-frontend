<?php
    $message = '';
    $error = '';
    if isset($_POST["submit"])
    {
        if(empty($_POST["inputSequences"]))
        {
            $error = "<label class='text-danger'> Input Sequence</label>"; 
        }
        else if(empty($_POST["modelorganisms"]))
        {
            $error = "<label class='text-danger'> Choose an Organism</label>";
        }
    }
    else 
    {
        if(file_exists)
    }
    >