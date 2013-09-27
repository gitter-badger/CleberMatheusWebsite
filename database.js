var db = openDatabase("Database1", "0.1", "Banco de Dados", 2 * 1024 * 1024);
console.log(db);
if(!db){
  alert('Erro!');
}
db.transaction( function (tx) {
    tx.executeSql(
       'CREATE TABLE IF NOT EXISTS contacts (id, name)',
       [],
       function ()
       {
          tx.executeSql('INSERT INTO contacts (id, name) VALUES (1, "Elemar")');
          tx.executeSql('INSERT INTO contacts (id, name) VALUES (2, "Bill Gates")');
       }
       );
});
db.transaction( function (tx){
    tx.executeSql(
      'SELECT * FROM contacts', [],
		function (tx, results){
			var len = results.rows.length;
			alert('Existem ' + len + ' registros!');
			for (var i = 0; i < len; i++){
				var row = results.rows.item(i);
				alert(row.id + ': ' + row.name);
			}
		},
		function (tx, error){
			alert('ooops ' + error.message);
		});
});
db.transaction( function (tx) {
    tx.executeSql(
       'DROP TABLE contacts',
       [],
		function (tx, results){
			alert('Tabela excluída');
		},
		function (tx, error){
			alert('ooops ' + error.message);
		}
    );
});