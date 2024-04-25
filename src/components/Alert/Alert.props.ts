import {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";
import {Push} from "../../redux/api/HistoryAPI";

export interface AlertProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    push: Push;
}