import React, { useState, useEffect } from "react";

import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import LinearProgress from '@material-ui/core/LinearProgress';

import { MuiPickersUtilsProvider, DatePicker} from '@material-ui/pickers';
import DateFnsUtils from "@date-io/date-fns";
import enLocale from "date-fns/locale/en-US";
import ruLocale from "date-fns/locale/ru";

const useStyles = makeStyles(theme => ({
	root: {
		display: 'flex',
		minHeight: '100%',
		flexDirection: 'column',
		width: '100%',
		position: 'relative',
	},
	title: {
		flex: '0 0 auto',
		fontWeight: '900',
		fontSize: '1.25rem'
	},
	content: {
		flex: '1 1 auto',
		overflowY: 'auto'
	},
	actions: {
		flex: '0 0 auto',
		display: 'flex',
		alignItems: 'center'
	}
}));

function FormRespond(props){
	let initVal = {};
	props.fields.forEach(element => {
		initVal[element.name] = element.value || '';
	});

	const classes = useStyles();
	const [value, setValue] = useState(initVal);

	useEffect(() => {
    	
    }, []);

	const handleSubmit = (event) => {
		event.preventDefault();
		const data = new FormData(event.target);
		props.handleSubmit(data);
	}
	const setFieldValue = (event, type) => {
		let newValue = event.target.value;
		if(type === 'float'){newValue = parseFloat(newValue) || '';}
		setValue({...value, [event.target.name]: newValue});
	}

	let enter_rows = 0;
	let all_rows = 0;

	return (
		<Box component="form" className={classes.root} onSubmit={handleSubmit}>
			<Box pt={3} pb={2} px={3} className={classes.title}>
				{props.title || "Новая форма"}
			</Box>
			<Box className={classes.content} px={3} py={1}>
				<MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
					<Grid container spacing={2}>
						{props.fields.map((list, index) => {
							if(list.required!==false && list.type!=='checkbox'){
								list.required = true;
								all_rows++;
								if(value[list.name]){enter_rows++}
							}
							return (
								<Grid item key={index} xs={12} sm={12 * (list.width || 1)}>
									{(list.type === 'string' || list.type === 'float' || !list.type) && <TextField
										required={list.required}
										name={list.name}
										label={list.label || list.name}
										fullWidth
										disabled={props.disabled}
										onChange={(event) => {setFieldValue(event, list.type)}}
										autoComplete={list.name}
										value={value[list.name]}
										variant="filled"
									/>}
									{list.type === 'select' && <FormControl fullWidth variant="filled" required={list.required}>
										<InputLabel id={list.name + "-label"}>
											{list.label}
										</InputLabel>
										<Select
											labelId={list.name + "-label"}
											value={value[list.name]}
											disabled={props.disabled}
											inputProps={{name: list.name}}
											onChange={(event) => {setFieldValue(event, list.type)}}
										>
											{list.select.items.map((select_list, select_index) => {
												return (
													<MenuItem value={select_list.id} key={select_index}>
														{select_list[list.select.label]}
													</MenuItem>
												);
											})}
										</Select>
									</FormControl>}
									{list.type === 'checkbox' && <Box>
										<FormControlLabel
        									control={
        										<Checkbox 
        											disabled={props.disabled} 
        											required={list.required}
        											onChange={(event) => {setValue({...value, [list.name]: event.target.checked})}}
        											checked={Boolean(value[list.name])}
        										/>}
        									label={list.label}
      									/>
      									<input readOnly hidden name={list.name} value={value[list.name] ? 1:0} />
      								</Box>}
									{list.type === 'date' && <DatePicker
										value={value[list.name] || null}
										onChange={(date) => {setValue({...value, [list.name]: date})}}
							 			animateYearScrolling
							 			fullWidth
							 			autoOk
							 			readOnly={props.disabled}
							 			clearable
							 			inputVariant="filled"
							 			format="yyyy-MM-dd"
							 			label={list.label}
							 			InputProps={{name: list.name, disabled: props.disabled}}
									/>}
								</Grid>
							);
						})}
					</Grid>
				</MuiPickersUtilsProvider>
			</Box>
			{props.disabled!==true && <Box className={classes.actions} px={3} pt={1} pb={2}>
				<Button 
					type="submit" 
					size="large" 
					variant="contained" 
					startIcon={<SaveIcon />} 
					color="primary"
					disabled={(all_rows - enter_rows) > 0}
				>
						Отправить
				</Button>
				{(all_rows - enter_rows) > 0 && <Box ml={2} style={{flex: '1 1 auto',}}>
					<Box mb={1}>* Заполните все важные поля (осталось: {all_rows - enter_rows})</Box>
					<LinearProgress variant="determinate" value={(enter_rows/all_rows)*100} />
				</Box>}
			</Box>}
		</Box>
	);
}

export default FormRespond;