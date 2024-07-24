import Image from "next/image";

export default function ProfilePicture() {
  return (
    <Image
      src="/images/pp.jpg"
      alt="Profile Picture"
      width={312}
      height={421}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEA3ADcAAD/4QCuRXhpZgAASUkqAAgAAAAHABIBAwABAAAAAQAAABoBBQABAAAAYgAAABsBBQABAAAAagAAACgBAwABAAAAAgAAADEBAgANAAAAcgAAADIBAgAUAAAAgAAAAGmHBAABAAAAlAAAAAAAAADcAAAAAQAAANwAAAABAAAAR0lNUCAyLjEwLjM0AAAyMDI0OjA3OjIzIDE4OjQzOjEwAAEAAaADAAEAAAABAAAAAAAAAP/hDM1odHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IlhNUCBDb3JlIDQuNC4wLUV4aXYyIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6R0lNUD0iaHR0cDovL3d3dy5naW1wLm9yZy94bXAvIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9ImdpbXA6ZG9jaWQ6Z2ltcDowOWExYzAxZS0yNzlmLTQ5NmEtODk5MC1kODFkNjkwOTkxOTkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDM2YTFhNDEtZWQ0Mi00ODcwLWI5N2EtYmExMDE5ZmRiZjg3IiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6MGQ0MzIyZWItMGQxMS00ZDE1LTkwMjAtMGJmOTA3YTA5NWNjIiBkYzpGb3JtYXQ9ImltYWdlL2pwZWciIEdJTVA6QVBJPSIyLjAiIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiIEdJTVA6VGltZVN0YW1wPSIxNzIxNzUzMDAwNDEwMzgwIiBHSU1QOlZlcnNpb249IjIuMTAuMzQiIHhtcDpDcmVhdG9yVG9vbD0iR0lNUCAyLjEwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDI0OjA3OjIzVDE4OjQzOjEwKzAyOjAwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyNDowNzoyM1QxODo0MzoxMCswMjowMCI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDpjaGFuZ2VkPSIvIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmFiZmVmOGEyLTg0NGMtNGEyYy1hNzY1LWZjYWIyYTQ1OTk3YSIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIgc3RFdnQ6d2hlbj0iMjAyNC0wNy0yM1QxODo0MzoyMCIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPD94cGFja2V0IGVuZD0idyI/Pv/iArBJQ0NfUFJPRklMRQABAQAAAqBsY21zBEAAAG1udHJSR0IgWFlaIAfoAAcAFwAQACcAFmFjc3BNU0ZUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD21gABAAAAANMtbGNtcwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADWRlc2MAAAEgAAAAQGNwcnQAAAFgAAAANnd0cHQAAAGYAAAAFGNoYWQAAAGsAAAALHJYWVoAAAHYAAAAFGJYWVoAAAHsAAAAFGdYWVoAAAIAAAAAFHJUUkMAAAIUAAAAIGdUUkMAAAIUAAAAIGJUUkMAAAIUAAAAIGNocm0AAAI0AAAAJGRtbmQAAAJYAAAAJGRtZGQAAAJ8AAAAJG1sdWMAAAAAAAAAAQAAAAxlblVTAAAAJAAAABwARwBJAE0AUAAgAGIAdQBpAGwAdAAtAGkAbgAgAHMAUgBHAEJtbHVjAAAAAAAAAAEAAAAMZW5VUwAAABoAAAAcAFAAdQBiAGwAaQBjACAARABvAG0AYQBpAG4AAFhZWiAAAAAAAAD21gABAAAAANMtc2YzMgAAAAAAAQxCAAAF3v//8yUAAAeTAAD9kP//+6H///2iAAAD3AAAwG5YWVogAAAAAAAAb6AAADj1AAADkFhZWiAAAAAAAAAknwAAD4QAALbEWFlaIAAAAAAAAGKXAAC3hwAAGNlwYXJhAAAAAAADAAAAAmZmAADypwAADVkAABPQAAAKW2Nocm0AAAAAAAMAAAAAo9cAAFR8AABMzQAAmZoAACZnAAAPXG1sdWMAAAAAAAAAAQAAAAxlblVTAAAACAAAABwARwBJAE0AUG1sdWMAAAAAAAAAAQAAAAxlblVTAAAACAAAABwAcwBSAEcAQv/bAEMAFQ4QEhANFRIREhgWFRkfNCIfHR0fQC4wJjRMQ1BPS0NJSFReeWZUWXJaSElpj2pyfICHiIdRZZSfk4OdeYSHgv/bAEMBFhgYHxwfPiIiPoJWSVaCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgv/CABEIAaUBOAMBEQACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAABAAIDBAX/xAAVAQEBAAAAAAAAAAAAAAAAAAAAAf/aAAwDAQACEAMQAAAB+cJCRCJCRCQkRERARARAQEBAQEQGiEhISEhEiEiIiIgICIAICAgICIRISESEhEhIiIiIgIgAgIAICAgIREhEhEhEhIhIgIiAgAgAgAgAgI0QiJCIiQkJCRERAQEBAAAQABAQGhEhERESESEiIiICIAIAAAIAAgI0QiIiIiQiQxEREVQEAEAAAABAAEaERERERIYRIhIgIgKgCAAAAAAAgNiQmhEREYhEiEiICIACoAAAAAAAA2IiIiaGESESEiIiAgACCgyAAAAAEbEREREYRERISIiICAAAAoAAAAAANiImhEYREREhIiICIAAAAKAMgAAAGzQiImoREREhIViICQIAAAAzQAABkCNiImhGE0IiQisQkBECBAAGQCgyAAAAbE0IjGhERERWEiIiAgBAAAAM0AZAAA6CImhhE0IiKwkJEQEBAgAGQAKyAAZADoImhGNCIiKokJEREBAAIAAGQCsgAABsTQjGhETQisIkRERAQAQJkAAyFBkAADoIiahE0IiqJCRCQEQAQAgZAAM0AZAAOgiaGE0IiKokJCREBAQACAGQAKyAGQA6CJoYTQiIqiQkJEQEBAAAgBkArIABkDoJoRjQiIiqIkQkRAQEAACAGQCgyAABs0IjGhERVERIhIiAgIAAEAAyFBkAADZoRjQiIiqIkJCRARAQAAIABkKDIAAHQRGNCIiKoiQkQkBEBAAACAGQoAyAAdBE1CIiKoiJCREREQAQAAIAZCgDIAB0ETUIiIqiIkJEREQEBAAAgBkKAMgAHQRNQiIiqIiQkRERAQAQACBkAoMgAAdBNDCIiIqiJEJERAQEAEAJkACgyAAB0NCMIiIqiJCQkRARAQAAAgAUGQAAA6iMIiIiqIkJERERAQEAACABQZAAADqIwiIiKoiQkREREBABAAIAFZAAAAOojGhERJUSEhIiIgICAAJAyFAAAAAHYYRERFYRISEiIgIgAgAEACgAAAADvEIiIisIkJEQgREBABACAUAAAAAB3hESERVISEiIiIgICAAJCgAAAAAA9EJCIkqJCQkRERAQEBAAIUAAEAAAHpiESEVhISEiIiAiAgAgQoAAACAAI9MQkIrCQkRCREBEBAQACVAAAEAAQHqiEhWEiEiISICICAgIEKCAAAgAgI9URKkJEJERCBERAQEAJBQBAAEBAQHrliEiISIiIiIiAgICBCoAIAICAgI9csREJEREJAREQEBAQIVABABAQEQHsliIiIiEiIgIgIgIASCoAICAgIgI9csQkREREREBEBEBACQVABAQEQERHrliIiIiIiIgIgIgIASoICAgICIgI9ksREQEREREQEQEBASAVAQEBEQERHslCIiIiAiIiAiAgICQKggICAiICI9ksRAREREBERAQEQEAJUEBEBEBESyeyUIiAiIiICIgIgICAgqAkCJQiICI9kQERARERAREQEQEBAQVAQEQEREB7IiAiICIiICIiAgIgIAqICAiICIj2QEQEQERERAREBEBAQEFQEQERARH/8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQABBQIBP//EABQRAQAAAAAAAAAAAAAAAAAAALD/2gAIAQMBAT8BAT//xAAUEQEAAAAAAAAAAAAAAAAAAACw/9oACAECAQE/AQE//8QAFBABAAAAAAAAAAAAAAAAAAAAsP/aAAgBAQAGPwIBP//EABQQAQAAAAAAAAAAAAAAAAAAALD/2gAIAQEAAT8hAT//2gAMAwEAAgADAAAAEMsn++bTSSSTabX333lkss++6bSaTbaTTaT333lksu+zTaaTbbabTaaX31llm+zabTTaSbSabTaX28tn+zaSaaaSSTTTSbaX+8t27bSTaaTbabSaSbaW+sn7aSSbTX//AOmm0km21t5ekkkk3tvtv982kkkk39Zm0kkl/v8Abb/b9JJJJJe1tttLb/fbbb7f7JttttyJJNt//wC+2232/wD+2kkktW2kn/8A7fbbf7f/APyTbbbqSbW3+3/0ks+3+27SSbWbaT+23+tktl+23/TbSS7Sb2//APrLbJZb/wD7dJttpNpf7bayySWWTbf7NpNtNpvb/wDsslslkt/2/wA2kk2m9v8AbWyW2yy2T/b9NtJJtb7bSWWyWy2Sb/btNtpNL7b+SyySWWSTb/ZpNtNp/b/2W2SSyyW3b/NpNtpvb/8Aslskllktu3+TaSaTe/8A7ZLZJLLJbft+m0k03t//AGyyyS2WS2/b9NtJJvf/APtllslssltu36TaSTW//tssttslsls2/SbSTa3/APbZZbbZZZJJt+k2k21v/wC2yyW2Sy2STf5NtJtL/wD/ALJbJJLLLZJ/8m2k0l//AO2WWSS2WS23/JtpJJf/AP8AbLLbbZZZLb9k20k2/wD/APslkttkstkk2zbSSbe229llkkkssts37bSSSW221ssskkskslv/AGkkkl//APa2WW2W2WWyTZJJJJP7f/SyyW2yWWW2ZJJJJNb/AG9llktslllkt7baSTa/3+ssskklsslkzbbaTaX32sslsklsssluSbaTaa++slltklssssnaSbTaaX8slktstsllluzaTaaaalktktttsllll6bSaaaa0lsltsltksssnSaTTTaeklttkklstllu6TTTTSa9skkkkktlksl3SaabTaXtttttklstlluaaaabSbUkktttklksss3TTTaTaSttkkttktlllnzTTTaTbYEtskltksslluaaTSbSCJEtsklslssssoIaRIBJIJEtsktslksssoIIBIAJIJktkktsllkstAIIAJABAMltkktstllllBAJAJJ//8QAFBEBAAAAAAAAAAAAAAAAAAAAsP/aAAgBAwEBPxABP//EABQRAQAAAAAAAAAAAAAAAAAAALD/2gAIAQIBAT8QAT//xAAcEAEBAQEBAQEBAQAAAAAAAAABABEwQBAgUHD/2gAIAQEAAT8Q/WWWWWWWWWWWWWWWWWWWWWWWWWdggssssssssssssssssssssskkkk5kEEEEEFlllllllllllllllkkkkkkzxIgggggggsssssssssssssskkkkkkkmf2REEEEEEEEFlllllllllllkkkkkkkkkzP5IiCCCCCCCCCyyyyyyyyyyyySSSSSSSSZmfwREEEEEEEEEEFlllllllllkkkkkkkkkkkzM/SIggggggggggsssssssssskkkkkkkkkkmZmZiIggggggggggsssssssssskkkkkkkkkmZmZ+EREEEEEEEEEFlllllllllkkkkkkkkkkzMzMxEREEEEEEEEFllllllllkkkkkkkkkkzMzMzEREQQQQQQQQQWWWWWWWWSSSSSSSSSTMzMzMRERERBBBBBBZZZZZZZZJJJJJJJMzMzMzMRERERERBEWfMssssskmSZmZmZmZmZiIiIiIiIiOLMzMzMzMzMzMRERERERERxZmZmZmZmZmZiIiIiIiIiOLMzMzMzMzMzMRERERERERxZmZmZmZmZmZiIiIiIiIiOLMzMzMzMzMzMRERERERERxZmZmZmZmZmZiIiIiIiIjkzMzMzMzMzMzEREREREREcmZmZmZmZmZmIiIiIiIiI4szMzMzMzMzMxERERERERzZmZmZmZmZmYiIiIiIiI5szMzMzMzMzMREREREREc2ZmZmZmZmZmIiIiIiIjozMzMzMzMzMxERERERERzZmZmZmZmZmYiIiIiIiOjMzMzMzMzMzERERERER0ZmZmZmZmZmYiIiIiIiOjMzMzMzMzMzEREREREdWZmZmZmZmZmIiIiIiIjozMzMzMzMzMxERERERHVmZmZmZmZmZiIiIiIjszMzMzMzMzMwQRERER3ZmZmZmZmZmYIIiIiI7MzMzMzMzMzMwQQRERHgZmZmZmZmZmbLLPp4mZmZmZmZmZ+ZZZZ5GZmZmZmZmfuWWWeNmZmZmZn95ZZZ42ZmZmZmf3lllnjZmZmZmeGWWeRmZn488ss8bMzMz0yzyMzPx655mZ/jM/6l//2Q=="
    />
  );
}
