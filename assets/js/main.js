"use strict";
// Générer les tâches de base
var baseTasks = ['faire le café', 'faire le ménage', 'dormir'];

// Boucle pour parcourir le tableau des tâches de base
for (var i = 0; i < baseTasks.length; i++) {
    $('#tasks').append('<li class="task">' + baseTasks[i] + '</li>');
// Ajout de chaque tâche à la list
// /!\si on met pas la div on a le texte coller.
};

    $('h2').html('Voici la todo list');
    // $('<p>').html('<p>1. Tâches en cours.</p>');
    // $('<p>').html('<p>2. Tâches terminées.</p>');
