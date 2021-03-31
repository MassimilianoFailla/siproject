import { MyHeaders } from "./MyHeaders";
import { Orders } from "./Orders";
import { Pagination } from "./Pagination";
import { Search } from "./Search";

export class tableConfig{


// headers tabelle
headers: MyHeaders[];

// dati tabelle
data: any;

// ordine
order: Orders;

// ricerca
search: Search;

// pagination
pagination: Pagination;

}
