function hide_tables()
{
	$("#id_all_s0").hide();
	$("#id_all_s1").hide();
}

function update_s0_data() {
	$.getJSON('data/s0.json', function(data) {
		$.each(data, function(i, item) {
			var row='<tr>';
			row+='<td style="display:none">'+data[i].index+'</td>';
			row+='<td>'+data[i].name+'</td>';
			row+='<td>'+data[i].experience_rank+'</td>';
			row+='<td>'+data[i].glyph_rank+'</td>';
			row+='<td>'+data[i].total_rank+'</td>';
			row+='<td>'+data[i].add_date+'</td>';
			row+='</tr>';
			$('#id_table_s0 tbody').append(row);
		});
		$('#id_table_s0').DataTable();
	});
}

function update_s1_data() {
	$.getJSON('data/s1.json', function(data) {
		$.each(data, function(i, item) {
			var row='<tr>';
			row+='<td style="display:none">'+data[i].index+'</td>';
			row+='<td>'+data[i].name+'</td>';
			row+='<td>'+data[i].experience_rank+'</td>';
			row+='<td>'+data[i].glyph_rank+'</td>';
			row+='<td>'+data[i].group_rank+'</td>';
			row+='<td>'+data[i].add_date+'</td>';
			row+='</tr>';
			$('#id_table_s1 tbody').append(row);
		});
		$('#id_table_s1').DataTable();
	});
}

function debug_s0()
{
	data = [
		 {
		   "index": "1",
		   "name": "目盲洞穴",
		   "experience_rank": "A",
		   "glyph_rank": "B",
		   "total_rank": "B",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "2",
		   "name": "古拉恩運河",
		   "experience_rank": "B",
		   "glyph_rank": "A",
		   "total_rank": "A",
		   "add_date": "2023/07/17"
		 }
	];
	
	$.each(data, function(i, item) {
		var row='<tr>';
		row+='<td style="display:none">'+data[i].index+'</td>';
		row+='<td>'+data[i].name+'</td>';
		row+='<td>'+data[i].experience_rank+'</td>';
		row+='<td>'+data[i].glyph_rank+'</td>';
		row+='<td>'+data[i].total_rank+'</td>';
		row+='<td>'+data[i].add_date+'</td>';
		row+='</tr>';
		$('#id_table_s0 tbody').append(row);
	});
	$('#id_table_s0').DataTable();
}

function debug_s1()
{
	data = [
		{
		"index": "1",
		"name": "奧杜爾洞穴",
		"experience_rank": "A",
		"glyph_rank": "A",
		"group_rank": "B",
		"add_date": "2023/07/20"
		},
		{
		"index": "2",
		"name": "薩拉特的巢穴",
		"experience_rank": "A",
		"glyph_rank": "A",
		"group_rank": "A",
		"add_date": "2023/07/20"
		}
	];
	
	$.each(data, function(i, item) {
		var row='<tr>';
		row+='<td style="display:none">'+data[i].index+'</td>';
		row+='<td>'+data[i].name+'</td>';
		row+='<td>'+data[i].experience_rank+'</td>';
		row+='<td>'+data[i].glyph_rank+'</td>';
		row+='<td>'+data[i].group_rank+'</td>';
		row+='<td>'+data[i].add_date+'</td>';
		row+='</tr>';
		$('#id_table_s1 tbody').append(row);
	});
	$('#id_table_s1').DataTable();
}