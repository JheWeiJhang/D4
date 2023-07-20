function update_s0_data(number) {
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
			$('#s0 tbody').append(row);
		});
	});
	
	
	//test for local computer
	/*
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
		 },
		 {
		   "index": "3",
		   "name": "奧德林地",
		   "experience_rank": "B",
		   "glyph_rank": "B",
		   "total_rank": "B",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "4",
		   "name": "巨鎚林地",
		   "experience_rank": "C",
		   "glyph_rank": "B",
		   "total_rank": "B",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "5",
		   "name": "雷斯溫荒野",
		   "experience_rank": "B",
		   "glyph_rank": "B",
		   "total_rank": "B",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "6",
		   "name": "沉沒遺跡",
		   "experience_rank": "B",
		   "glyph_rank": "C",
		   "total_rank": "B",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "7",
		   "name": "巫水",
		   "experience_rank": "C",
		   "glyph_rank": "B",
		   "total_rank": "C",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "8",
		   "name": "失落秘庫",
		   "experience_rank": "C",
		   "glyph_rank": "C",
		   "total_rank": "C",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "9",
		   "name": "惡魔烙痕",
		   "experience_rank": "C",
		   "glyph_rank": "D",
		   "total_rank": "C",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "10",
		   "name": "大地之殤",
		   "experience_rank": "D",
		   "glyph_rank": "C",
		   "total_rank": "C",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "11",
		   "name": "邪教徒避難所",
		   "experience_rank": "E",
		   "glyph_rank": "C",
		   "total_rank": "C",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "12",
		   "name": "勇士之歿",
		   "experience_rank": "C",
		   "glyph_rank": "E",
		   "total_rank": "D",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "13",
		   "name": "低語松林",
		   "experience_rank": "C",
		   "glyph_rank": "E",
		   "total_rank": "D",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "14",
		   "name": "穹頂",
		   "experience_rank": "D",
		   "glyph_rank": "E",
		   "total_rank": "D",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "15",
		   "name": "毒蛇巢穴",
		   "experience_rank": "E",
		   "glyph_rank": "D",
		   "total_rank": "D",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "16",
		   "name": "墨根工坊",
		   "experience_rank": "F",
		   "glyph_rank": "C",
		   "total_rank": "D",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "17",
		   "name": "暗影墜落處",
		   "experience_rank": "D",
		   "glyph_rank": "E",
		   "total_rank": "D",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "18",
		   "name": "廢棄的礦道",
		   "experience_rank": "D",
		   "glyph_rank": "E",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "19",
		   "name": "先祖輓歌",
		   "experience_rank": "D",
		   "glyph_rank": "E",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "20",
		   "name": "黑暗深谷",
		   "experience_rank": "E",
		   "glyph_rank": "D",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "21",
		   "name": "古拉恩貧民窟",
		   "experience_rank": "E",
		   "glyph_rank": "D",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "22",
		   "name": "叛徒藏身處",
		   "experience_rank": "E",
		   "glyph_rank": "E",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "23",
		   "name": "西弗塔廢墟",
		   "experience_rank": "F",
		   "glyph_rank": "D",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "24",
		   "name": "科卓岡兵營",
		   "experience_rank": "D",
		   "glyph_rank": "F",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "25",
		   "name": "聖教軍大教堂",
		   "experience_rank": "F",
		   "glyph_rank": "D",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "26",
		   "name": "黑瑪瑙堡",
		   "experience_rank": "D",
		   "glyph_rank": "F",
		   "total_rank": "E",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "27",
		   "name": "卡爾蒂姆監獄",
		   "experience_rank": "F",
		   "glyph_rank": "E",
		   "total_rank": "F",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "28",
		   "name": "黑色收容所",
		   "experience_rank": "E",
		   "glyph_rank": "F",
		   "total_rank": "F",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "29",
		   "name": "密議",
		   "experience_rank": "E",
		   "glyph_rank": "F",
		   "total_rank": "F",
		   "add_date": "2023/07/17"
		 },
		 {
		   "index": "30",
		   "name": "野性巢穴",
		   "experience_rank": "F",
		   "glyph_rank": "E",
		   "total_rank": "F",
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
		$('#s0 tbody').append(row);
	});
	*/
}