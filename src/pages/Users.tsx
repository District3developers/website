import { Empty, Table } from 'antd';
import { collection } from 'firebase/firestore';
import { db } from '../firebase';
import { useCollectionQuery } from '../hooks/useCollectionQuery';
import { dynamicFirebaseColumn } from '../utils/dynamicFirebaseColumn';

export const Users: React.FC = () => {
  const { loading, data } = useCollectionQuery(collection(db, 'Users'));

  const { dataSource, columns } = dynamicFirebaseColumn(data);

  const locale = {
    emptyText: <Empty />,
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      loading={loading}
      locale={locale}
    />
  );
};
