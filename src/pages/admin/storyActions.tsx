import React from 'react';
import {withAdminLayout} from "../../layout/AdminLayout/AdminLayout";
import AdminCard from "../../components/AdminCard/AdminCard";
import styles from "../../styles/AdminStoryActions.module.css";
import cn from "classnames";
import {H} from "../../components/Htag/Htag";

interface ActionItemProps{
    type: "Отправка уведомления" | "Смена роли",
    who: string
    whom: string
}

const ActionItem = ({type, who, whom}: ActionItemProps) => {
    return(
        <tr className={cn(styles.userRow)}>
            <td>{type}</td>
            <td>{who}</td>
            <td>{whom}</td>
        </tr>
    )
}

const StoryActions = () => {
    return (
        <>
            <AdminCard title={"История событий"}>
                <table className={styles.table}>
                    <tbody>
                    <tr className={cn(styles.userRow, styles.head)}>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                Тип события
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                Отправитель
                            </H>
                        </td>
                        <td>
                            <H type={"body"} size={"xxl"}>
                                Получатель
                            </H>
                        </td>
                    </tr>
                    <ActionItem
                        type={"Отправка уведомления"}
                        who={"Рудик"}
                        whom={"Роналду"}
                    />
                    <ActionItem
                        type={"Отправка уведомления"}
                        who={"Рудик"}
                        whom={"Роналду"}
                    />
                    <ActionItem
                        type={"Отправка уведомления"}
                        who={"Рудик"}
                        whom={"Роналду"}
                    />
                    {/*<UserRow*/}
                    {/*    username={"Rudiko"}*/}
                    {/*    role={"Admin"}*/}
                    {/*    email={"chakryan_rudik@mail.ru"}*/}
                    {/*/>*/}
                    {/*<UserRow*/}
                    {/*    username={"Rudiko"}*/}
                    {/*    role={"Admin"}*/}
                    {/*    email={"chakryan_rudik@mail.ru"}*/}
                    {/*/>*/}
                    {/*<UserRow*/}
                    {/*    username={"Rudiko"}*/}
                    {/*    role={"Admin"}*/}
                    {/*    email={"chakryan_rudik@mail.ru"}*/}
                    {/*/>*/}
                    </tbody>
                </table>
            </AdminCard>
        </>
    );
};

export default withAdminLayout(StoryActions)