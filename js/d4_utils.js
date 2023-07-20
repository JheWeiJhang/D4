function hide_tables()
{
	$('#id_all_s0').css('display', 'none');
	$('#id_all_s1').css('display', 'none');
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