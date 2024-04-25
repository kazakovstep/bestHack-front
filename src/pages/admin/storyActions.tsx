import React from 'react';
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";
import AdminCard from "../../components/AdminCard/AdminCard";
import styles from "../../styles/AdminStoryActions.module.css";
import cn from "classnames";
import {H} from "../../components/Htag/Htag";
import {useGetAllPushesQuery} from "../../redux/api/HistoryAPI";

interface ActionItemProps{
    id: number,
    title: string,
    description: string
    whom: string
}

const ActionItem = ({id, title, description, whom}: ActionItemProps) => {
    return(
        <tr className={cn(styles.userRow)}>
            <td>{id}</td>
            <td>{whom}</td>
            <td>{title}</td>
            <td>{description}</td>
        </tr>
    )
}

const StoryActions = () => {

    const {data: pushes} = useGetAllPushesQuery();

    return (
        <>
            <AdminCard title={"Список уведомлений"}>
                <table className={styles.table}>
                    <tbody>
                    <tr className={cn(styles.userRow, styles.head)}>
                        <td>
                            <H type={"body"} size={"large"}>
                                ID
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"large"}>
                                КОМУ
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"large"}>
                                ЗАГОЛОВОК
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"large"}>
                                КОНТЕНТ
                            </H>
                        </td>
                    </tr>
                    {pushes?.map((push) => (
                        <ActionItem
                            id={push?.id}
                            whom={push?.roleDestination}
                            title={push?.title}
                            description={push?.description}
                        />
                    ))}
                    </tbody>
                </table>
            </AdminCard>
        </>
    );
};

export default withAdminLayout(StoryActions)